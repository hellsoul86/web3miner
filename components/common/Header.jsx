import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu, Row, Col, Icon, Button, Popover, Badge } from 'antd';
import Connect from './Connect'
import { header } from '../../config/data';

const searchEngine = 'Google';

export default class Header extends React.Component {
  static propTypes = {
    isFirstScreen: PropTypes.bool,
    isMoblie: PropTypes.bool,
    selectTab: PropTypes.string
  }
  render() {
    const { isFirstScreen, isMoblie, selectTab } = this.props;
    const headerClassName = classNames({
      clearfix: true,
      'home-nav-white': false,
    });
    const menuChildren = header.map((d, i) => (
      <Menu.Item key={d.key}>
        <a href={d.href} className="menu">{d.text}</a>
      </Menu.Item>
    ))
    const menu = [
      <Connect key="connect"/>,,
      <Menu mode="horizontal" defaultSelectedKeys={[selectTab]} id="nav" key="nav" style={({width:"540px"})}>
        {menuChildren}
      </Menu>
    ];
    return (
      <div>
        <header id="header" className={headerClassName}>
          <Row>
            <Col lg={4} md={5} sm={24} xs={24}>
              <a id="logo">
                <img alt="logo" src='./logo3.png' />
              </a>
            </Col>
            <Col lg={20} md={19} sm={0} xs={0}>
              {menu}
            </Col>
          </Row>
          
        </header>
        <hr className="header-hr"/>
      </div>
    );
  }
}
