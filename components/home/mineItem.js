import React, { useState } from 'react';
import { useWeb3React } from "@web3-react/core"
import { Row, Col, Button } from 'antd';

import Miner from "../../utils/miner"

export default function MineItem(props) {
    const { account, active, library } = useWeb3React();
    const [amount, setAmount] = useState(1);
    const [price, setPrice] = useState(0);
    const [buyType, setBuyType] = useState(true);
    const [residualAmount, setResidualAmount] = useState(0);
    const handleSetAmount = (direction) => {
        if (!direction && amount == 1) {
            return
        }
        const newAmount = direction ? amount + 1 : amount - 1
        setAmount(newAmount);
    }
    const handleBuy = async () => {
        if (active)
		{
            const miner = new Miner(library, props.data.minerAddress);
            await miner.Mint(account, amount);
        }
    }
    const handleApprove = async () => {
        if (active)
		{
			const miner = new Miner(library, props.data.minerAddress);
			await miner.Approve(account);
		}
    }
    React.useEffect(() => {
        async function LoadMineList() {
            if (active) {
                const miner = new Miner(library, props.data.minerAddress);

                const price = await miner.GetPrice();
                setPrice(price);

                const allowance = await miner.Allowance(account);
                setBuyType(Number(allowance) > 0);

                const amount = await miner.GetResidualAmount();
                setResidualAmount(amount * props.data.oneMint);
                console.log('LoadMineList', price, allowance);
            }
        }
        LoadMineList()
    })
    return (
        <div className="mine-item">
            <div className="mine-header">
                <img src="./home/mine.png" alt="mine"/>
                {props.data.title}
                {/* <span className="mine-tips">{props.data.tips}</span> */}
            </div>
            <Row align="top" justify="center">
                <Col lg={3} sm={3} xs={3}>
                    <img className="nft" src={props.data.imgUrl} alt="nft" width="80%" />
                </Col>
                <Col lg={1} sm={1} xs={1}></Col>
                <Col lg={14} sm={14} xs={14} className="mine-detail">
                    <Row align="middle" justify="center" className='m-b-30'>
                        <Col lg={12}>
                            <h4>矿池地址</h4>
                            <a className="address" target="_blank" rel="noopener noreferrer" href={props.data.aleoUrl}>
                                {props.data.aleoAddress}
                            </a>
                        </Col>
                        <Col lg={4}>
                            <h4>开机日期</h4>
                            <span className="white">{props.data.startTime}</span>
                        </Col>
                        <Col lg={4}>
                            <h4>总算力</h4>
                            <span>{props.data.oneMint * props.data.maxAmount} CS</span>
                        </Col>
                        <Col lg={4}>
                            <h4>矿池定金</h4>
                            <span>{props.data.deposit}%</span>
                        </Col>
                    </Row>
                    <Row align="middle" justify="center">
                        <Col lg={12}>
                            <h4>合约地址</h4>
                            <a className="address" target="_blank" rel="noopener noreferrer" href={props.data.minerUrl + props.data.minerAddress}>
                                {props.data.minerAddress}
                            </a>
                        </Col>
                        <Col lg={4}>
                            <h4>截止日期</h4>
                            <span className="white">{props.data.lastTime}</span>
                        </Col>
                        <Col lg={4}>
                            <h4>剩余算力</h4>
                            <span>{residualAmount} CS</span>
                        </Col>
                        <Col lg={4}>
                            <h4>管理费</h4>
                            <span>{props.data.cost}%</span>
                        </Col>
                    </Row>
                </Col>
                <Col lg={1} sm={1} xs={1}></Col>
                <Col lg={5} sm={5} xs={5} className="mine-buy">
                    <Row align="middle" justify="center" className='m-b-10'>
                        <Col lg={8} className="t-l">
                            <h4>折扣价格</h4>
                            <div className="mine-price">{price} USDT</div>
                        </Col>
                        <Col lg={8} className="t-c">
                            <h4>折扣</h4>
                            <div className="mine-discount">20%</div>
                        </Col>
                        <Col lg={8} className="t-r">
                            <h4>原价价格</h4>
                            <div className="mine-price t-d-l">{price * 1.5} USDT</div>
                        </Col>
                    </Row>
                    <div>
                        <Button onClick={() => handleSetAmount(false)}>-</Button>
                        <span className='mine-amount'>{amount}</span>
                        <Button onClick={() => handleSetAmount(true)}>+</Button>
                    </div>
                    {
                        buyType
                        ? <a className="mine-submit" onClick={handleBuy}>Mint</a> 
                        : <a className="mine-submit" onClick={handleApprove}>Approve</a>
                    }
                </Col>
            </Row>
        </div>
    )
}