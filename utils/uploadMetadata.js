import axios from "axios";
const ethers = require("ethers");

const sign_message = async () => {
  window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
    console.log("Account Connected: " + res[0]);
  });
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const address = await signer.getAddress(); //users public key
  const messageRequested = (
    await axios.get(
      `https://api.lighthouse.storage/api/auth/get_message?publicKey=${address}`
    )
  ).data; //Get message
  const signedMessage = await signer.signMessage(messageRequested); //Sign message
  return {
    signedMessage: signedMessage,
    address: address,
  };
};

// 传入js对象返回uri
export default async (metadata) => {
  // Sign message for authentication
  const signingResponse = await sign_message();

  // Get a bearer token
  const accessToken = (
    await axios.post(`https://api.lighthouse.storage/api/auth/verify_signer`, {
      publicKey: signingResponse.address,
      signedMessage: signingResponse.signedMessage,
    })
  ).data.accessToken;

  // // Push file to lighthouse node
  // // const output = await lighthouse.upload(e, accessToken);
  // const output = await uploadText("aaaa", accessToken);
  const formData = new FormData();
  formData.append("file", JSON.stringify(metadata));
  const output = await axios.post(
    "https://node.lighthouse.storage/api/v0/add",
    formData,
    {
      headers: {
        "Content-type": `multipart/form-data`,
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  console.log("File Status:", output);
  /*
    	  output:
    		{
    		  Name: "filename.txt",
    		  Size: 88000,
    		  Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
    		}
    	  Note: Hash in response is CID.
    	*/

  return `https://gateway.lighthouse.storage/ipfs/${output.data.Hash}`;
};
