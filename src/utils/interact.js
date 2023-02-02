
import Web3 from "web3";
import web3Modal from "../Web3Modal";
const contractABI = '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"beanRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"buyEggs","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"}],"name":"calculateEggBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"calculateEggBuySimple","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eggs","type":"uint256"}],"name":"calculateEggSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getEggsSinceLastHatch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyEggs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyMiners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"add","type":"address"}],"name":"getReferalAdress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"hatchEggs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seedMarket","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"sellEggs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
const contractAddress = '0xd2d28013E97161cb58bfD36643cC93a3E137ec37'

let provider;
let web3Object;
let contract;
let web3;
// or init with options

export const getCoinbase = async () => {
  //  Get Accounts
  const accounts = await window.web3Object.eth.getAccounts();
  debugger
  return accounts.length > 0 ? accounts[0] : ""
}

export const connectWallet = async () => {
  try{
    provider = await web3Modal.connect();
    web3Object = new Web3(provider);
    window.web3Object = web3Object;
    if (window.web3Object) {
      const chainId = 56 // 3 for ropsten, 4 for rinkeby, 1 for mainnet
      // switch to chainId
      let account;
      try{
        await  web3Object.eth.getAccounts()
      .then(acc=>{
        account = acc;
      })
      }
      catch(err){
        console.log(err)
        return{
          message: 'Connect wallet',  
          status:false
        }
      }
      let useraddress = account[0];
      let current_chainId = await  web3Object.eth.getChainId();
      // console.log('Hello world',current_chainId);
      if (current_chainId !== chainId) {
        // console.log('chainID=',chainId)
        try{
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x38',
            rpcUrls: ['https://bsc-dataseed.binance.org/'],
            chainName: 'BSC Mainnet'}],
          })
          // console.log('successfully changed')
          return{

            address: useraddress,
            message: 'Connected: '+String(useraddress).substring(0, 6) +
            '...' +
            String(useraddress).substring(38),
            status:true
          }
        }
        catch(err){
          console.log(err,'err, switch network')
          return{
            address:'',
            message: 'switch network',
            status: false
          }
        }
          
          
      }
      else
      console.log('chain ID is same')
          return {
            address: useraddress,
            message: 'Connected: '+String(useraddress).substring(0, 6) +
            '...' +
            String(useraddress).substring(38),
            status:true
          }
    } 
    else {
      return {
        address: '',
        message: 'please install metamask',
        status:false
      }
    }
  }
  catch (e) {
       console.error(e);
      throw new Error("User denied wallet connection!");
  }
}

export const buyToad = async (
  Toad,refer
) => {
  //load smart contract
  window.web3Object = web3Object;
  let contract = await new window.web3Object.eth.Contract(contractABI, contractAddress,{from: await getCoinbase()}) //loadContract();
  const amountToSend = web3Object.utils.toBN(parseInt(Toad* 1e18))
  //console.log(refer)
  let txHash = 'still pending'
  if (!refer) 
    refer = await getCoinbase();
  try{
    await contract?.methods.buyEggs(refer).send({
      from: await getCoinbase(),
      value: amountToSend,
    })
    .then(function (receipt) {
      ////console.log('state 2')
      txHash =
        '✅ Check out your transaction on Etherscan: <a href="https://ropsten.etherscan.io/tx/' +
        receipt.transactionHash +
        '">https://ropsten.etherscan.io/tx/' +
        receipt.transactionHash
    })
    return {
      success: true,
      address:
        '✅ Check out your transaction on Etherscan: <a href="https://ropsten.etherscan.io/tx/' +
        txHash +
        '">https://ropsten.etherscan.io/tx/' +
        txHash,
    }
  }
  //getOwnerOfHarberger
  
catch(error){
  //console.log(error)
  return {
    success: false,
    status: '😥 Something went wrong: ' + error.message,
  }
}
}
export const sellToad = async (
) => {
  let contract = await new web3Object.eth.Contract(contractABI, contractAddress,{from: await getCoinbase()}) //loadContract();
  let txHash = "pending"
  try{
    await contract?.methods.sellEggs().send({
      from: await getCoinbase()

    })
    .then(function (receipt) {
      ////console.log('state 2')
      txHash =
        '✅ Check out your transaction on Etherscan: <a href="https://ropsten.etherscan.io/tx/' +
        receipt.transactionHash +
        '">https://ropsten.etherscan.io/tx/' +
        receipt.transactionHash
    })
    return {
      success: true,
      address:
        '✅ Check out your transaction on Etherscan: <a href="https://ropsten.etherscan.io/tx/' +
        txHash +
        '">https://ropsten.etherscan.io/tx/' +
        txHash,
    }
  }
  catch(error){
    return {
      success: false,
      address: '😥 Something went wrong: ' + error.message,
    }
  }
}
export const compoundToad = async (
  refer
) => {
  let contract = await new web3Object.eth.Contract(contractABI, contractAddress,{from: await getCoinbase()}) //loadContract();
  if (!refer) 
    refer = await getCoinbase();
  let txHash = "pending"
  try{
    await contract?.methods.hatchEggs(refer).send({
      from: await getCoinbase()

    })

    .then(function (receipt) {
      ////console.log('state 2')
      txHash =
        '✅ Check out your transaction on Etherscan: <a href="https://ropsten.etherscan.io/tx/' +
        receipt.transactionHash +
        '">https://ropsten.etherscan.io/tx/' +
        receipt.transactionHash
    })
    return {
      success: true,
      address:
        '✅ Check out your transaction on Etherscan: <a href="https://ropsten.etherscan.io/tx/' +
        txHash +
        '">https://ropsten.etherscan.io/tx/' +
        txHash,
    }
  }
  catch(error){
    //console.log(error)
    return {
      success: false,
      address: '😥 Something went wrong: ' + error.message,
    }
  }
}

export const getBallance = async () => {
  //load smart contract
  contract = await new window.web3Object.eth.Contract(contractABI, contractAddress,{from: await getCoinbase()}) //loadContract();
  var rewards;var eggs;var contractBalance;var balance;
  window.web3Object = web3Object;
  if (window.ethereum || web3Object){
    //console.log(window.ethereum.selectedAddress)
    let address = await getCoinbase();
    debugger
  try{
    balance = await  new window.web3Object.eth.getBalance(await getCoinbase())
    //console.log(balance)
    
  } catch(error){
    console.log(error)
    balance = 0.00000000000000001 ;
    
  }

  try {
    debugger
    contractBalance = await web3Object.eth.getBalance(contractAddress)
    //console.log(contractBalance, "contractBalance")
    debugger
    // console.log('contractBalance=',contractBalance)
    }
    catch(err){
      console.log(err)
      contractBalance = 0.0001;
    }
    //console.log(window.ethereum.selectedAddress)
  try {
      eggs = await contract?.methods.getMyEggs(await getCoinbase()).call()
      
      if (eggs == 0)
      {
        rewards = 0;
      }
      else{
        rewards =await contract?.methods.beanRewards(await getCoinbase()).call()
        
      }
      //console.log(eggs, "eggssssss")
    }
    catch(err){
      console.log(err)
      
      eggs = 0.;
      rewards = 0;
    }
  }

  return {
    success:true,
    balance: parseFloat(balance/1e18),
    reward: parseFloat(rewards/1e18),
    eggs : parseFloat(eggs/1e6),
    contractBalance : parseFloat(contractBalance/1e18)
  }
}

