import Web3Modal from 'web3modal'
import WalletConnectProvider  from '@walletconnect/web3-provider'
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'
 
 //  Create WalletConnect Provider
 const providerOptions = {
    /* See Provider Options Section */
    // Example with injected providers
    injected: {
      display: {
        name: "MetaMask",
      },
      package: null
    },
    // Example with WalletConnect provider
    walletconnect: {
      display: {
        name: "Mobile"
      },
      package: WalletConnectProvider , // required
      options: {
        infuraId: "a346366462c84f2c8f4a984e4bfd02e6", // required
        rpc:{
          56:'https://bsc-dataseed.binance.org/'
        }
      },
      
    },
    coinbasewallet: {
      display: {
        name: "Coinbase"
      },
      package: CoinbaseWalletSDK,
      options: {
          appName: "moneytoad",
          infuraId: "https://rinkeby.infura.io/v3/a346366462c84f2c8f4a984e4bfd02e6"
      }
    }
  };

  let web3Modal
  if (typeof window !== 'undefined')
    web3Modal = new Web3Modal({
        network: "rinkeby", // optional
        // network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions // required
  });


  export default web3Modal