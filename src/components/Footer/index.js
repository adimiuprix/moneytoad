import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import TELEGRAM from "../../assets/image/Icon/Social/Telegram.svg";
import FACEBOOK from "../../assets/image/Icon/Social/Facebook.svg";
import LINKEDIN from "../../assets/image/Icon/Social/Linkedin.svg";
import TWITTER from "../../assets/image/Icon/Social/Twitter.svg";
import YOUTUBE from "../../assets/image/Icon/Social/Youtube.svg";
import INSTAGRAM from "../../assets/image/Icon/Social/Instagram.svg";
import { CopyToClipboard } from 'react-copy-to-clipboard'

import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Footer() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Box px={2} py={5} backgroundColor="rgba(255, 255, 255, 0.03)">
      <Box
        backgroundColor="#22262b"
        px={{ md: 30, xs: 5 }}
        pt={5}
        pb={3}
        borderRadius="50px"
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            fontSize={{ md: "14px", xs: "10px" }}
            color="primary.text"
          >
            Copyright ©2022 BNB FarmLand
          </Typography>
          <Button variant="contained" color="secondary">
  
            <Typography
              sx={{ padding: { md: "16px 24px", xs: "5px" } }}
              fontSize={{ md: "14px", xs: "10px" }}
              color="primary.text"
            >
              Connect With US
            </Typography>
          </Button>
        </Box>
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={5}
          pt={2}
        >
          <Grid
            item
            md={6}
            xs={12}
            display="flex"
            borderTop={{ md: "2px solid #555555" }}
            pb={{ md: 0, xs: 2 }}
            pt={{ md: 3, xs: 0 }}
            justifyContent={{ md: "flex-start", xs: "center" }}
          >
            <a href='/' style={{textDecoration : 'none'}}>
              <Typography color="primary.text" pr={5}>
                  Home
              </Typography>
            </a>
            <CopyToClipboard text="contact@boxa-token.io" onCopy={handleClick}>
              <Typography color="primary.text">Contact</Typography>
            </CopyToClipboard>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            borderTop="2px solid #555555"
            pt={{ md: 3, xs: 2 }}
            textAlign={{ md: "right", xs: "center" }}
          >
            <a href="https://t.me/" target="_blank" rel="noreferrer">
              <img
                src={TELEGRAM}
                alt="telegram"
                style={{ paddingRight: "30px" }}
              />
            </a>
            <a target="_blank" href="https://facebook.com/" rel="noreferrer">
              <img
                src={FACEBOOK}
                alt="facebook"
                style={{ paddingRight: "30px" }}
              />
            </a>
            <a target="_blank"  href="https://linkedin.com/" rel="noreferrer">
              <img
                src={LINKEDIN}
                alt="linkedin"
                style={{ paddingRight: "30px" }}
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={TWITTER}
                alt="twitter"
                style={{ paddingRight: "30px" }}
              />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noreferrer">
              <img
                src={YOUTUBE}
                alt="youtube"
                style={{ paddingRight: "30px" }}
              />
            </a>
            <a href="https://instgram.com/" target="_blank" rel="noreferrer">
              <img src={INSTAGRAM} alt="instagram" />
            </a>
          </Grid>
        </Grid>
      </Box>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Email address copied
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Footer;
