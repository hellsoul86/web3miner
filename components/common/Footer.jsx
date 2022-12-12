import React from 'react';
import { Row, Col, Button } from 'antd';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div className='footer-wrap'>
                    <Row align="top" justify="center">
                        <Col lg={16} sm={16} xs={16}>
                            <img src="./logo3.png" alt="logo" height="50" />
                            <p>Web 3 Aleo Miner</p>
                            <a href="https://twitter.com/kexuezhifu" target="_blank" rel="noopener noreferrer" className='icon'>
                                <img src="./footer/twitter.svg" width="24" alt="twitter" />
                            </a>
                            {/* <a href="" target="_blank" rel="noopener noreferrer" className='icon'>
                                <img src="./footer/github.svg" width="24" alt="github" />
                            </a> */}
                            <a href="https://discord.com/channels/1037795565955731506/1039433498710257694" target="_blank" rel="noopener noreferrer" className='icon'>
                                <img src="./footer/discord.png" width="30" alt="discord" />
                            </a>
                        </Col>
                        <Col lg={4} sm={4} xs={4} className="vertical-menu-grid">
                            <a href="https://www.aleo.org/" target="_blank" rel="noopener noreferrer" className='btn'>Aleo.org</a>
                            <a href="./" className='btn2'>Home</a>
                            <a href="./order" className='btn2'>Order</a>
                        </Col>
                        <Col lg={4} sm={4} xs={4}>
                            <a href="/order" className='btn'>For Developers</a>                        
                            <a href="https://www.aleo.studio/" target="_blank" rel="noopener noreferrer" className='btn2'>Aleo Studio</a>
                            <a href="https://www.aleo.network/" target="_blank" rel="noopener noreferrer" className='btn2'>Aleo Explorer</a>
                            <a href="https://aleo.pm/" target="_blank" rel="noopener noreferrer" className='btn2'>Aleo Package Manager</a>
                            <a href="https://developer.aleo.org/getting_started/" target="_blank" rel="noopener noreferrer" className='btn2'>Aleo Developer Docs</a>
                        </Col>
                    </Row>
                </div>
            </footer>
        )
    }
}