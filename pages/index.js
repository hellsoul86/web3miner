
import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import Header from '../components/common/Header';
import Demo from '../components/home/demo';
// import Banner from './home/Banner';
// import Page1 from './home/Page1';
// import Page2 from './home/Page2';
// import Page3 from './home/Page3';
// import Token from './home/Token';
// import Team from './home/Team';
// import Partners from './home/Partners';
import MinePanel from '../components/home/minePanel';
import Footer from '../components/common//Footer';

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

class Home extends React.PureComponent {
  state = {
    isFirstScreen: true,
    isMobile,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  onEnterChange = (mode) => {
    this.setState({
      isFirstScreen: mode === 'enter',
    });
  }
  render() {
    return (
      [
        <Header key="header" selectTab="home" />,
        <MinePanel key="minePanel" />,
        // <Demo key="name" />,
        <Footer key="footer" />,
        <DocumentTitle title="web 3 aleo miner" key="web 3 aleo miner" />,
      ]
    );
  }
}
export default Home;
