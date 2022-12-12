import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'
import 'react-github-button/assets/style.css';
import './static/custom.less';
import './static/header.less';
import './static/home.less';
import './static/footer.less';
import './static/responsive.less';
import './static/order.less';
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

function getLibrary(provider) {
  return new Web3(provider)
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}

export default MyApp
