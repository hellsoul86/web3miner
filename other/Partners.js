
import React from 'react';
import { Row, Col } from 'antd';

function Partners() {
  return (
    <div id="partners" className="partners">
      <div className="partners-wrap">
        <h2>TGVerse Partners</h2>
        <Row align="middle" justify="center">
            <Col lg={6} sm={24} xs={24}>
                <a href="#" className='TokenPocket' />
            </Col>
            <Col lg={6} sm={24} xs={24}>
                <a href="#" className="polygon" />
            </Col>
            <Col lg={6} sm={24} xs={24}>
                <a href="#" className="Chainlink" />
            </Col>
            <Col lg={6} sm={24} xs={24}>
                <a href="#" className="GateIo" />
            </Col>
        </Row>
        <Row align="middle" justify="center">
            <Col lg={6} sm={24} xs={24}>
                <a href="#" className='Metamask' />
            </Col>
            <Col lg={6} sm={24} xs={24}>
                <a href="#" className="MEXCGlobal" />
            </Col>
            <Col lg={6} sm={24} xs={24}>
                <a href="#" className="OpenSea" />
            </Col>
            <Col lg={6} sm={24} xs={24}>
                <a href="#" className="PancakeSwap" />
            </Col>
        </Row>
      </div>
    </div>
  );
}

export default Partners;
