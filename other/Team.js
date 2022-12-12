
import React from 'react';
import { Row, Col } from 'antd';

function Team() {
  return (
    <div id="team" className="team">
      <div className="team-wrap">
        <h2>Team</h2>
        <i className="line" />
        <Row align="top" justify="center" className='team-content'>
            <Col lg={6} sm={24} xs={24}>
                <a className="img xue" />
                <h2>Wayne Xue</h2>
                <h2>CEO</h2>
                <ul>
                    <li>Technical expert in web2.</li>
                    <li>Founder and executive of many web2 companies. Rich experience in cloud storage, AIOT and online entertainment platforms.</li>
                    <li>4 years experience in the blockchain industry, deep insight into future gamefi opportunities.</li>
                </ul>
            </Col>
            <Col lg={6} sm={24} xs={24}>
                <a className="img roy" />
                <h2>Roy Ding</h2>
                <h2>CTO</h2>
                <ul>
                    <li>12 years of Internet experience. He has served as chief architect and CTO of many Internet companies, good at distributed system design.</li>
                    <li>4 years of entrepreneurial experience in the blockchain industry.</li>
                </ul>
            </Col>
            <Col lg={6} sm={24} xs={24}>
                <a className="img xu" />
                <h2>Iris Xu</h2>
                <h2>CFO</h2>
                <ul>
                    <li>
                        She worked for Huawei Technologies 
                        Germany, Freudenberg Group, Roche 
                        Investments, and Messe Frankfurt in China.
                    </li>
                    <li>
                        She is currently a partner of Ruizhao
                        Group (PE Fund) and an executive partner 
                        of RCLUB, an investment community in 
                        Shanghai. She has extensive cross-industry 
                        experience and empowers companies with 
                        significant influence.
                    </li>
                </ul>
            </Col>
            <Col lg={6} sm={24} xs={24}>
                <a className="img laurence" />
                <h2>Laurence Wang</h2>
                <h2>COO</h2>
                <ul>
                    <li>
                        15 years of experience in the traditional 
                        game industry, expert in traditional 
                        game channels and community 
                        operation management , rich resources 
                        of domestic game manufacturers and 
                        channels.
                    </li>
                    <li>
                        3 years of blockchain community 
                        operation and management experience, 
                        rich resources of domestic blockchain 
                        community.
                    </li>
                </ul>
            </Col>
        </Row>
      </div>
    </div>
  );
}

export default Team;
