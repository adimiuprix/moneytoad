import React,{useState,useEffect,useRef} from "react";
import { Box, Typography, Grid, Button, Paper, Link,TextField, filledInputClasses } from "@mui/material";

import TOAD_BANNER2 from "../../assets/image/Money_Toad_logo.png";
import TOAD_BANNER1 from "../../assets/image/money_toad.png";

import useWindowDimensions from "../../hooks/useDimension";

import {useCounterStore, useTimeCounterStore} from '../../utils/store';
import { ToastContainer, toast } from 'react-toastify';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import 'react-toastify/dist/ReactToastify.css';

import whitePaper from '../../assets/MoneyToad Whitepaper.pdf'
import kyc from '../../assets/MoneyToad.jpg'
import {
  buyToad,
  sellToad,
  compoundToad,
  getBallance
} from '../../utils/interact.js'
import { textAlign } from "@mui/system";
import {styles} from './styles.js'
function Banner() {
  const { width } = useWindowDimensions();
  const [toad, setToad] = useState();
  const videoEl = useRef(null);
  const ref = useRef(null);
  const [ballance,setBallance] = useState();
  const [rewardBNB,setRewardBNB] = useState();
  const [balanceToad,setBalancedToad] = useState();
  const [contractBalance,setContractBalance] = useState();
  const notify = (str1, str2) => toast(str1);
  const [count,setCount] = useCounterStore();
  const [timeCount, setTimeCount]=useTimeCounterStore();
  let timetracker;
  const [ timeTracking, setTimeTrackingStop] = useState(true)
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play() && videoEl.current.play().catch(error => {
        console.log('video can not be autoplayed')
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  const calculateTimeLeft = () => {
    const difference = +new Date("2022-08-02T22:00:00+03:00") - +new Date() ;
    let timeLeft = {};
    timeLeft = {
      day: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(difference / (1000 * 60 * 60)) % 24,
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    console.log(timeLeft)
    
    if (difference > 0) {
      
      return timeLeft;
    }

    else
      return false
  };
  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const createNotification = (str) => {
          NotificationManager.info(str);
  };
  const onBuyPressed = async  () => {
    //console.log('buyclicked=', toad)
    debugger
    if (Number(toad))
    {
      debugger
      const {success,address} = await buyToad(toad,refer);
      if (success)
        {
          getStatus();
          //notify("Buyed successfully",address);
          //createNotification("Buyed Successfully")
        }
    }
  }
  const onSellPressed =async () => {
    //console.log('sellclicked');
    const {success,address} = await sellToad()
    if (success)
      {
        getStatus();
        //notify("Compounded successfully",address);
        //createNotification("Claimed successfully")
      }
    else{
      //notify("Compound failed",address);
 
      //createNotification("Claim Failed")
    }
    //console.log('status=',status);
  }
  const onCompoundPressed =async () => {
    //console.log('compound');
    const {success,address} = await compoundToad(refer)
    
    if (success)
        {
          getStatus();
          notify("Selled successfully",address);
          createNotification("Selled Successfully")
        }
    else{
      notify("Sell failed",address);
      createNotification("Sell Failed")
    }
    //console.log('status=',status);
  }
  async function getStatus(){
    //console.log('gettingbalance')
  const {balance,reward,eggs,contractBalance} = await getBallance();
  debugger
  setBallance(balance)
  setRewardBNB(reward)
  setBalancedToad(eggs)      
  setContractBalance(contractBalance)
}
  useEffect(() => {
      if (count.status)
        getStatus();
  }
  , [count]);
  const [ refer,setRefer ] = useState();
  useEffect(()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('refer')
    setRefer(code)
    setTimeCount(true)
  },[])
 useEffect(() => {
    if(timeTracking)
      setTimeout(() => {
          let left = calculateTimeLeft()
          if (!left)
            setTimeTrackingStop(false)
          else
            setTimeLeft(left);
          
      }, 1000)
    else
      setTimeCount(true)
  });

    const copyToClipboard = () => {
      const tempInput = document.createElement('input')
      let temp =  'https://moneytoad.app/?refer=';
      temp = temp + count.address;
      tempInput.value = temp
      document.body.appendChild(tempInput)
      tempInput.select()
      document.execCommand('copy')
      document.body.removeChild(tempInput)
  };

  return (
    <Box mb={10}>
    
      <Box style={styles.container} >
        <Box
          position="relative"
          overflow="hidden"
          px={{ md: 10, xs: 5 }}
          py={5}
          style={{
            backgroundImage:
                  "url('../../assets/images/temple_in_the_rain_by_lamperouge0_ddcgnhy-fullview (1).jpg') ",

                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position:'relative'
          }}
        >
          <NotificationContainer/>
          
          <Grid container display="flex" alignItems="center" justifyContent="center">
            
            <Grid item xs={12} sm={12}>
              <Box 
                  px={{ md: 10, xs: 0 }}
                  py={5}
                  mt={10}
                  style={{
                  textAlign:'center',
                  alignItems:'center',
                  justifyContent:'center',
                  
                }}>
                  <Typography
                      
                        fontSize={{ md: "54px", xs: "34x" }}
                        px={2}
                        py={1}
                      
                        color={'#febf33'}
                      >
                        🚀 Launching Soon...
                        <br></br>
                  </Typography>
                  
                      
                  {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
                    <Typography
                    
                        fontSize={{ md: "24px", xs: "12x" }}
                        px={2}
                        py={1}
                        color={'#febf33'}
                        display="inline-flex"
                      >
                      <Box component="div" display="inline" style={{marginRight:'20px'}} >
                        <Box style={{borderColor:'rgba(255, 27, 27, 0.3)',borderRadius:'6px',borderStyle:'solid'}} padding ={{md:'10px 50px',xs:'5px 10px'}} fontSize={{ md: "36px", xs: "24x" }}>
                          {timeLeft.day}
                        </Box>
                        <br/>
                        Days
                      </Box>
                      <Box component="div" display="inline" style={{marginRight:'20px'}}>
                        <Box style={{borderColor:'rgba(255, 27, 27, 0.3)',borderRadius:'6px',borderStyle:'solid'}} padding ={{md:'10px 50px',xs:'5px 10px'}} fontSize={{ md: "36px", xs: "24x" }}>
                          {timeLeft.hours < 10 ? '0' + timeLeft.hours: timeLeft.hours}
                        </Box>
                        <br/>
                        Hours
                      </Box>
                      <Box component="div" display="inline" style={{marginRight:'20px'}} >
                        <Box style={{borderColor:'rgba(255, 27, 27, 0.3)',borderRadius:'6px',borderStyle:'solid'}} padding ={{md:'10px 50px',xs:'5px 10px'}} fontSize={{ md: "36px", xs: "24x" }}>
                          {timeLeft.minutes < 10 ? '0' + timeLeft.minutes: timeLeft.minutes}
                        </Box>
                        <br/>
                        Minutes
                      </Box>
                      <Box component="div" display="inline" style={{marginRight:'20px'}} >
                        <Box style={{borderColor:'rgba(255, 27, 27, 0.3)',borderRadius:'6px',borderStyle:'solid'}} padding ={{md:'10px 50px',xs:'5px 10px'}} fontSize={{ md: "36px", xs: "24x" }}>
                          {timeLeft.seconds < 10 ? '0' + timeLeft.seconds: timeLeft.seconds}
                        </Box>
                        <br/>
                        Seconds
                      </Box>
                    </Typography>
                  ) : (
                    <Typography
                    
                    fontSize={{ md: "24px", xs: "14x" }}
                    px={2}
                    py={1}
                    color={'#febf33'}
                    >
                      Time is up 🔥
                    </Typography>
                  )}
                    
                </Box>
              <Box display="flex" alignItems="center" justifyContent="center" mt={15}>
                <img
                  src={TOAD_BANNER2}
                  alt="back"
                  width={width < 700 ? "100%" : "30%"}
                />
              </Box>
            </Grid>
          </Grid>

        </Box>
        
        <Box
          position="relative"
          overflow="hidden"
          style={styles.boxStyle}
          px={{ md: 5, xs: 2 }}
        >     
              
              <Box  style={{
                        paddingLeft:'20px',
                        borderRadius:'12px',
                        textAlign:'center',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center'  
              }}>
                <img
                    src={WALLET_IMAGE}
                    alt="eth green logo"
                    width={width > 500 ? "100px" : "0px"}
                  />
                  
                <Typography
                      fontSize={{ md: "24px", xs: "14x" }}
                      px={1}
                      py={1}
                      style={{
                          backgroundColor:'rgb(255, 133, 5)',
                          borderRadius:'12px',
                          color:'#febf33',
                          textAlign:'center',
                          alignItems:'center',
                          justifyContent:'center'  
                        }}
                      fontWeight={400}
                      color="primary"
                      align="center"
                    >
                      MoneyToad is a BNB Miner dapp on BSC, with a daily return of 12% per day
                </Typography>
              </Box>
              <Box mt={3} display={{md:'flex',xs:'block'}} justifyContent='center'>
                <a href={whitePaper} target="_blank"  justifyContent='center' style={{ textDecoration: "none",display:'flex',justifyContent:'center'}}>
                    <Box 
                      width="130px" 
                      textAlign="center" 
                      textTransform="capitalize"
                      color="white"
                      fontWeight={'600'} 
                      py={'3px'} 
                      cursor={'pointer'}
                      px={'0px'} 
                      backgroundColor={"#c6660d"}
                      borderRadius={'10px'}
                      boxShadow={'0px 3px #febf33'}
                      border={'2px solid #e58f0e'}
                      marginBottom = {'20px'}
                      marginRight={{md:'30px',xs:'0px'}}
                    >
                      Whitepaper
                    </Box>
                </a>
                <a href="/faq" target="_blank"  justifyContent='center' style={{ textDecoration: "none",display:'flex',justifyContent:'center'}}>
                  <Box 
                      width="130px" 
                      textAlign="center" 
                      color="white"
                      fontWeight={'600'} 
                      py={'3px'} 
                      px={'0px'} 
                      cursor={'pointer'}
                      backgroundColor={"#c6660d"}
                      borderRadius={'10px'}
                      boxShadow={'0px 3px #febf33'}
                      border={'2px solid #e58f0e'}
                      marginBottom = {'20px'}
                      marginRight={{md:'30px',xs:'0px'}}
                    >
                      FAQ
                    </Box>
                </a>
                <a href="https://github.com/Security-Network-pro/Audit-Smart-Contract/blob/main/MoneyToad_0xd2d28013E97161cb58bfD36643cC93a3E137ec37.pdf" target="_blank"  justifyContent='center' style={{ textDecoration: "none",display:'flex',justifyContent:'center'}}>
                  <Box 
                      width="130px" 
                      textAlign="center" 
                      color="white"
                      fontWeight={'600'} 
                      py={'3px'} 
                      px={'0px'} 
                      cursor={'pointer'}
                      backgroundColor={"#c6660d"}
                      borderRadius={'10px'}
                      boxShadow={'0px 3px #febf33'}
                      border={'2px solid #e58f0e'}
                      marginBottom = {'20px'}
                      marginRight={{md:'30px',xs:'0px'}}
                    >
                      Audit
                    </Box>
                </a>
                <a href={kyc} target="_blank"  justifyContent='center' style={{ textDecoration: "none",display:'flex',justifyContent:'center'}}>
                  <Box 
                      width="130px" 
                      textAlign="center" 
                      color="white"
                      fontWeight={'600'} 
                      py={'3px'} 
                      px={'0px'} 
                      cursor={'pointer'}
                      backgroundColor={"#c6660d"}
                      borderRadius={'10px'}
                      boxShadow={'0px 3px #febf33'}
                      border={'2px solid #e58f0e'}
                      marginBottom = {'20px'}
                      marginRight={{md:'30px',xs:'0px'}}
                    >
                      KYC
                    </Box>
                </a>
              </Box>
              <Box mt={5} display={{md:'flex',xs:'block'}} gap="20px" justifyContent='center' margin=" 50px auto 0" maxWidth="100%" minWidth="50%" malignItems='stretch'>
                 
                  <Box style={styles.leftBox}>
                    <Box style={styles.dataRow}>
                        <Box>Contract</Box>
                        <Box style={styles.value}> {contractBalance != null ? parseInt(contractBalance*1e6)/1e6:0} BNB</Box>
                    </Box>
                    <Box style={styles.dataRow}>
                        <Box>Wallet</Box>
                        <Box style={styles.value}> {ballance != null ? parseInt(ballance*1e6)/1e6:0} BNB</Box>
                    </Box>
                    <Box style={styles.dataRow}>
                        <Box>Your Toad</Box>
                        <Box style={styles.value}> {balanceToad != null? parseInt(parseInt(balanceToad*1e6)/1e6):0} Toad</Box>
                    </Box>
                    <Typography style={styles.antWrapper}>
                        <input style={styles.antInput} ></input>
                        <input
                        
                            style={styles.antInput}
                            value={toad}
                            onChange={(event) =>{
                              const re = /^(0|[1-9]\d*)(\.\d+)?$/;
                              if (event.target.value === '' || re.test(event.target.value)) {
                                event.target.value < 0
                                    ? setToad(0)
                                    : setToad(event.target.value)}
                            }}
                            onChange={(e)=>setToad(e.target.value)}
                            display="flex"

                          />
                        <Typography color="#feec6c" fontSize="16px" position="absolute" right="15px" top="12px" display='flex' alignItems="center">
                            <Typography>
                              BNB
                            </Typography>
                        </Typography>
                    </Typography>
                    <Box style={styles.buybutton}  onClick={onBuyPressed}>
                        PET TOAD
                    </Box>
                    <Box style={styles.actionWrapper}>
                      <Box style={styles.dataRow}>
                          <Box>Your Reward</Box>
                          <Box style={styles.value}> {rewardBNB?String(rewardBNB).substring(0,8):0} BNB</Box>
                      </Box>
                      <Box style={styles.actionButtons}>
                        <Box style={styles.actionButton} onClick={onCompoundPressed}>RE-PET</Box>
                        <Box style={styles.actionButton} onClick={onSellPressed}>WITHDRAW </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box style={styles.rightBox}>
                    <Box style={styles.contactInfo}>
                        <Box style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                          <img src={TOAD_BANNER1}
                              width={width < 700 ? "50%" : "50%"}/>
                        </Box>
                        <Box width={{md:'65%',xs:'100%'}}>
                          <Typography style={{
                            color:'#9221a',
                            fontSize:'25px',
                            fontWeight:'700',
                            marginBottom:'10px'
                          }}>
                            Karma Stats
                            <Box style={styles.dataRow}>
                              <Box>Daily return</Box>
                              <Box style={styles.value}> 12%</Box>
                            </Box>
                            <Box style={styles.dataRow}>
                              <Box>APR</Box>
                              <Box style={styles.value}>  4380%</Box>
                            </Box>
                            <Box style={styles.dataRow}>
                              <Box>Dev fee</Box>
                              <Box style={styles.value}> 3%</Box>
                            </Box>
                          </Typography>
                        </Box>
                    </Box>
                    <Box style={styles.referral}>
                      <Typography style={{
                        color:'#e58f0e',
                        fontSize:'25px',
                        fontWeight:'700',
                        marginBottom:'10px'
                      }}>Referral Link</Typography>
                      <Typography color="#febf33">Earn 15% of the BNB used to pet toads from anyone who uses your referral link</Typography>
                      <Box style={{
                        display:'flex',
                        justifyContent:'space-between',
                        alignItems:'center',
                        marginTop:'20px'
                      }}>
                        {timeCount?
                        <Box style={styles.referralLink}>                         
                            {!count.status ? count.message:'https://moneytoad.app/?refer=...'}                           
                        </Box>
                        :
                        <Box style={styles.referralLink}>
                            please wait
                        </Box>}
                        <Box style={styles.copyButton} onClick={copyToClipboard}>
                          COPY
                        </Box>
                      </Box>
                    </Box>
                  </Box>
              </Box>
            </Box>
            </Box>
            <Box style={styles.videoWrapper}>
              <video 
                 
                 playsInline
                  loop
                  muted
                src="/istockphoto-482954821-640_adpp_is.mp4"
                  ref={videoEl}
                  style={styles.video}
              ></video>
            </Box>
            <Box
              display="flex"
              px={{ md: 30, xs: 5 }}

              justifyContent={{ md: "flex-start", xs: "center" }}
            >
            </Box>
       
    </Box>
  );
}

export default Banner;
