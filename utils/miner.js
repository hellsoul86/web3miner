import MinerABI from './abi/miner.json';
import UsdtABI from './abi/usdt.json';
import Web3 from 'web3'

const usdtAddress = '0x65b98e9F98BE176D3A965774Cb727c492267Ec29';

class Miner {
    constructor(web3, minerAddress)
    {
        this.web3 = web3;
        this.minerAddress = minerAddress;
        this.minerContract = new this.web3.eth.Contract(MinerABI, this.minerAddress);
        this.usdtContract = new  this.web3.eth.Contract(UsdtABI, usdtAddress)
    }
    async GetGasPrice()
    {
        return await this.web3.eth.getGasPrice();
    }
    async Mint(account, amount)
    {
        debugger
        const price = this.GetPrice();
        const totalAmount = price * amount;
        console.log('price', price, 'totalAmount', totalAmount);
        // this.contract.methods.mint(amount).send({ from: account, value: String(totalAmount)});
        this.minerContract.methods.mint(amount).send({from: account});
    }
    async DiscountedMint(account, amount, code)
    {
        debugger
        const price = this.GetDiscountedMint();
        const totalAmount = price * amount;
        console.log('price', price, 'totalAmount', totalAmount);
        this.minerContract.methods.discountedMint(amount, code);
    }
    async Allowance(account)
    {
        const allowance = await this.usdtContract.methods.allowance(account, this.minerAddress).call()
        return Number(Web3.utils.fromWei(allowance, 'mwei'));
    }
    async Approve(account)
    {
        await this.usdtContract.methods.approve(this.minerAddress, 100000000000000).send({from: account});
    }
    async BalanceOf(account)
    {
        return Number(await this.minerContract.methods.balanceOf(account).call());
    }
    async GetPrice()
    {
        const price = await this.minerContract.methods.getPrice().call();
        return Number(Web3.utils.fromWei(price, 'mwei'));
    }
    async GetDiscountedMint()
    {
        const price = await this.minerContract.methods.getDiscountedPrice().call()
        return Number(Web3.utils.fromWei(price, 'mwei'));
    }
    async GetCodeCounter(code)
    {
        return await this.minerContract.methods.getCodeCounter(code).call();
    }
    async GetResidualAmount()
    {
        return Number(await this.minerContract.methods.getResidualAmount().call());
    }
}

export default Miner