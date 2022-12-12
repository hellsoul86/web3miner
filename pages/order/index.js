import React from 'react';
import { useWeb3React } from "@web3-react/core"
import Header from '../../components/common/Header';
import OrderList from "../../components/order/orderList";
import Footer from '../../components/common//Footer';

class Order extends React.PureComponent {
  render() {
    return (
      [
        <Header key="header" selectTab="order" />,
        <OrderList key="orderList" />,
        <Footer key="footer" />,
      ]
    )
  }
}

export default Order