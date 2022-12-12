import React from 'react';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Icon, Button, Input, Form } from 'antd';
import QueueAnim from 'rc-queue-anim';
import Web3 from 'web3';
import { useWeb3React } from "@web3-react/core"
import Miner from "../../utils/miner"

export default function Demo() {
    // active：一个钱包现在是否正在连接状态？
    // account：已连接的区块链账户地址。
    // library：它是web3或ethers，取决于你传入的内容。
    // connector：当前的连接器。因此，当我们连接时，本例中是injected连接器。
    // activate：连接到一个钱包的方法。
    // deactivate: 从一个钱包断开连接的方法
	const { account, active, library } = useWeb3React()
	async function onFinish (values) {
		console.log('Success:', values);
		console.log('account', account);
        // console.log('match', this.props.match);
		const amount = Number(values.amount);
		if (active)
		{
			const miner = new Miner(library, '0x4DD6bf7FdD769c08D62d79342B3241e56c388c0A')
			miner.Mint(account, amount)
			// miner.DiscountedMint(account, amount, 888)
		}
		else 
		{
			alert("Please Connect")
		}
	}
	async function handleApprove() {
		if (active)
		{
			const miner = new Miner(library, '0x4DD6bf7FdD769c08D62d79342B3241e56c388c0A')
			await miner.Approve(account);
		}
	}
	async function handleAllowance() {
		if (active)
		{
			const miner = new Miner(library, '0x4DD6bf7FdD769c08D62d79342B3241e56c388c0A')
			const r = await miner.Allowance(account)
			alert(`Allowarce: ${r}`)
		}
	}
	async function handleBalanceOf() {
		if (active)
		{
			const miner = new Miner(library, '0x4DD6bf7FdD769c08D62d79342B3241e56c388c0A')
			const balance = await miner.BalanceOf(account)
			alert(`BalanceOf: ${balance}`)
		}
	}
	return (
		<div className="demo">
			<div className="demo-wrap">
				<h2>Allowance USDT: <Button onClick={handleAllowance}>测试</Button></h2>
				<h2>Approve USDT: <Button onClick={handleApprove}>测试</Button></h2>
				<h2>Mint NFT</h2>
				<Form 
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 8 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}>
					<Form.Item
						label="Amount"
						name="amount"
						rules={[{ required: true, message: 'Please input Amount!' }]}
					>
						<Input type="number" />
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type="primary" htmlType="submit">
							Mint NFT
						</Button>
					</Form.Item>
				</Form>
				<h2>BalanceOf: <Button onClick={handleBalanceOf}>测试</Button> </h2>
			</div>
		</div>
	)
}