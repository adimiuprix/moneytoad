
import {
    Typography,
  } from "@mui/material";
import {
  connectWallet
} from '../../utils/interact.js'
import { useEffect } from 'react'
import {useCounterStore, useTimeCounterStore} from '../../utils/store' 

const ConnectButton = () => {
    const [count,setCount] = useCounterStore();
    const [timeCount, setTimeCount]=useTimeCounterStore();
    useEffect(()=>{
        async function addWalletListener(){
        if (window.ethereum) {
          window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length > 0) {
              setCount({...count,address:accounts[0]})
            } else {
              setCount({address:'',status:false})
            }
          })
        } else {
          setCount({address:'',status:false})
        }
      }
        addWalletListener();
    },[])
    useEffect(()=>{
    
        connectWalletPressed();
      },[timeCount])
    

    const connectWalletPressed = async () => {
        let walletStatus;
        
        if (timeCount)
          { walletStatus = await connectWallet(); 
              
            if (!count.status)
              setCount({address:walletStatus.address,launchtime:true,message:walletStatus.message,status:walletStatus.status})
            else{
              setCount({message:'connect wallet',launchtime:true})
            }
          }
      }
    return(
        <Typography fontSize="16px" whiteSpace="nowrapp" cursor="pointer" onClick={connectWalletPressed}>{timeCount ? count.message : 'Please wait until launch'}</Typography>
    )
}
export {ConnectButton}