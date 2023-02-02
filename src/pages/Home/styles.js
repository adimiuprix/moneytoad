import BACKGROUND_GREEN_CURVE from "../../assets/image/chinese_temple__by_wannabegansta124_dc938nu-pre (1).jpg";

const styles = {
    container: {
      backgroundImage: `url(${BACKGROUND_GREEN_CURVE})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      minHeight: "100vh",
    },
    boxStyle:{
      backgroundImage:`url(${BACKGROUND_GREEN_CURVE})`,
    },
    mainContent:{
      width: '800px',
      maxWidth: '100%',
      margin: '50px auto 0',
      display: {md:'flex',xs:'block'},
      justifyContent: 'center',
      alignItems: 'stretch',
      gridGap: '20px',
      gap: '20px',
      
    },
    leftBox:{
      padding:'20px',
      background:'#e58f0e',
      borderRadius:'20px',
      minWidth:"40%",
      marginBottom:'30px',
      width: {md:'36%',xs:'100%'}
    },
    value:{
      fontWeight: '600',
      fontSize: '4.8vw',
      fontSize:'24px',
      color: '#feec6c',
    },
    rightBox:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'spaceBetween',
      width: {md:'36%',xs:'100%'}
    },
    dataRow: {
      display: "flex",
      justifyContent: "space-between",
      alignContent: "center",
      margin: "5px 0",
      color: "#49221a",
      fontSize:'22px',
      lineHeight: "35px"
    },
    antWrapper:{
      height: '55px',
      margin: '0',
      position: 'relative',
      border: '2px solid #731c00',
      boxShadow: 'none',
      backdropFilter: 'blur(20px)',
      boxSizing: 'border-box',
      borderRadius: '40px',
      background: '#c6660d',
      display:'flex',
      width:'100%'
    },
    antInput:{
      border: 'none',
      color: '#feec6c',
      background: "transparent",
      fontSize: '24px',
      fontWeight: "600",
      lineHeight: "55px",
      width:'100%',
      textAlign: "center",
      outline:'0',
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0}
    },
    buybutton:{
      border: "2px solid #731c00",
      borderRadius: "30px",
      color: "#731c00",
      fontSize:{md:'18px',xs:'4vw'},
      fontWeight: "600",
      lineHeight: "42px",
      padding: "5px 0",
      textAlign: "center",
      cursor:'pointer',
      marginTop: "10px",
    },
    actionWrapper:{
      marginTop: "30px",
      borderTop: "1px dashed #731c00",
      paddingTop: "10px",
    },
    actionButtons:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center'
    },
    contactInfo:{
      background: "#c6660d",
      borderRadius: "20px",
      padding: "20px",
      display: "flex",
      alignContent: "center",
      justifyContent: "space-between",
    },
    actionButton:{
      width: "calc(50% - 10px)",
      cursor:'pointer',
      textAlign: "center",
      border: "2px solid #731c00",
      color: "#731c00",
      fontWeight: "700",
      fontSize: '16px',
      padding: "8px 0",
      borderRadius: "30px",
    },
    referral:{
      background: "#401b0b",
      borderRadius: "20px",
      padding: "20px",
      marginTop: "20px",
    },
    referralLink:{
      border: "2px solid #e58f0e",
      boxSizing: "border-box",
      borderRadius: "40px",
      padding: "5px 20px",  
      cursor:'pointer',
      fontSize:'13px',
      color: "#e58f0e"
    },
    copyButton:{
      border: "2px solid #e58f0e",
      boxSizing: "border-box",
      borderRadius: "40px",
      cursor:'pointer',
      padding: "5px 20px",
      color: 'rgb(64, 27, 11)',
      background:'#fbba08',
      fontSize:'13px',
      textAlign:'center',
      fontWeight:'600'
  
    },
    video:{
      objectFit: "cover",
      width: "100vw",
      height: "100vh",
      zIndex:'-1',
      position: "fixed",
      top: "0",
      left: "0",
      opacity:'0.15'
    },
  
  };
  export {styles}