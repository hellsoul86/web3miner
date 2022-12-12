import { useWeb3React } from "@web3-react/core"
import { useEffect } from "react"
import { injected } from "../wallet/connectors"
import { Button } from 'antd';

export default function Connect() {
    const { active, account, library, connector, activate, deactivate } = useWeb3React()

    async function connect() {
        try {
            await activate(injected)
            localStorage.setItem('isWalletConnected', true)
        } catch (ex) {
            console.log(ex)
        }
    }

    async function disconnect() {
        try {
            deactivate()
            localStorage.setItem('isWalletConnected', false)
        } catch (ex) {
            console.log(ex)
        }
    }

    function getAccount() {
        return active ? account.substring(0, 5) + '…' + account.substring(account.length - 4, account.length) : 'Connect'
    }

    useEffect(() => {
        const connectWalletOnPageLoad = async () => {
            if (localStorage?.getItem('isWalletConnected') === 'true') {
                try {
                    await activate(injected)
                    localStorage.setItem('isWalletConnected', true)
                } catch (ex) {
                    console.log(ex)
                }
            }
        }
        connectWalletOnPageLoad()
    }, [])

    return (
        <Button className="header-lang-button" ghost size="small" key="lang" onClick={connect}>
            {getAccount()}
        </Button>
    )
}
