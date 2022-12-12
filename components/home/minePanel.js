
import React from 'react';
import { useWeb3React } from "@web3-react/core"

import { minerList } from '../../config/data';
import MineItem from './mineItem'

export default function MinePanel() {
    const { account, active, library } = useWeb3React()
    const children = minerList.map((data, i) => {
        return (
            <MineItem data={data} key={data.minerAddress} />
        )
    });
    return (
        <div className="home-panel">
            <div className='mine-panel'>
                <h2>Web 3 Aleo Miner</h2>
                <div className='content'>
                    <p>算力（也称哈希率）是比特币网络处理能力的度量单位。即为计算机（CPU）计算哈希函数输出的速度。比特币网络必须为了安全目的而进行密集的数学和加密相关操作。 例如，当网络达到10Th/s的哈希率时，意味着它可以每秒进行10万亿次计算。 在通过“挖矿”得到比特币的过程中，我们需要找到其相应的解m，而对于任何一个六十四位的哈希值，要找到其解m，都没有固定算法，只能靠计算机随机的hash碰撞，而一个挖矿机每秒钟能做多少次hash碰撞，就是其“算力”的代表，单位写成hash/s,这就是所谓工作量证明机制POW(Proof Of Work)。</p>
                    {children}
                </div>
            </div>
        </div>
    )
}