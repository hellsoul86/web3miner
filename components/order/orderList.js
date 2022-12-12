import React, { useState } from 'react';
import { useWeb3React } from "@web3-react/core"
import { Row, Col, Button } from 'antd';
import axios from "axios";

import Miner from "../../utils/miner"
import { minerList } from '../../config/data';

export default function OrderList() {
	const { account, active, library } = useWeb3React()
    const [totalReward, setTotalReward] = useState('--')
    const [totalMine, setTotalMine] = useState('--')
    const [orderList, setOrderList] = useState(
        <Row align="middle" justify="center">
            <Col lg={8}>--</Col>
            <Col lg={6}>--</Col>
            <Col lg={7}>--</Col>
            <Col lg={3}>--</Col>
        </Row>
    )
    React.useEffect(() => {
        async function GetReward(address, balance, maxForce, oneMint) {
            if (balance > 0) {
                try {
                    const request = await axios.get(`https://client.damominer.hk/api/v1/miner/${address}/rewards`);
                    if (request.data.code == 0) {
                        const total_reward = Number(request.data.result.total_reward.substring(0, 8)) * 100;
                        const one_reward = total_reward / maxForce;
                        const reward = one_reward * balance * oneMint;
                        // Number(num.toString().match(/^\d+(?:\.\d{0,2})?/))
                        return Number(reward.toFixed(8));
                    }
                }
                catch 
                {
                    return 0;
                }
            }
            return 0;
        }
        async function LoadOrderList() {
            if (active) {
                const children = []
                let sumMine = 0
                let sumReward = 0
                for (var i = 0;i < minerList.length; i++) {
                    const data = minerList[i];
                    const miner = new Miner(library, data.minerAddress)
                    const balance = await miner.BalanceOf(account)
                    const reward = await GetReward(data.aleoAddress, balance, data.maxForce, data.oneMint)
                    sumMine += balance
                    sumReward += reward
                    // console.log(sumReward, reward)
                    if (balance > 0) {
                        children.push(
                            <Row align="middle" justify="center" className="order-data">
                                <Col lg={8}>
                                    <a target="_blank" rel="noopener noreferrer" href={data.aleoUrl}>
                                        {data.aleoAddressTrunc}
                                    </a>
                                </Col>
                                <Col lg={6}>{balance}</Col>
                                <Col lg={7}>{data.startTime}</Col>
                                <Col lg={3}>{reward}</Col>
                            </Row>
                        )
                    }
                }
                setOrderList(children)
                setTotalMine(sumMine)
                setTotalReward(sumReward)
            } else {
                setOrderList(
                    <Row align="middle" justify="center">
                        <Col lg={8}>--</Col>
                        <Col lg={6}>--</Col>
                        <Col lg={7}>--</Col>
                        <Col lg={3}>--</Col>
                    </Row>
                )
                setTotalMine("--")
                setTotalReward("--")
            }
        }
        LoadOrderList()
    })
	return (
		<div id="order">
            <div className="order-header">
                <h2>
                    <span className="reward">总积分: {totalReward} / </span>
                    <span className="mine">算力: {totalMine} cs</span>
                </h2>
                <div className="title">
                    <img src="./order/icon.png" alt="order icon" height="24" />
                    OrderList
                </div>
            </div>
            <div className="order-list">
                <Row align="middle" justify="center" className='order-title'>
                    <Col lg={8}>矿池地址</Col>
                    <Col lg={6}>Amount(cs)</Col>
                    <Col lg={7}>开机日期</Col>
                    <Col lg={3}>积分</Col>
                </Row>
                {orderList}
            </div>
		</div>
	)
}