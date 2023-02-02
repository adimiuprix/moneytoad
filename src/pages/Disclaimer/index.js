import React from "react";
import { Box, Typography, Grid } from "@mui/material";

import Fade from "react-reveal/Fade";

import Banner from "./Banner";



function Howtobuy() {

  return (
    <>
      <Banner />
      <Box position="relative" overflow="hidden" py={5} px={{ md: 30, xs: 5 }}>
        <Grid container alignItems="flex-end" justifyContent="space-between">
          <Grid item xs={12} md={12}>
            <Typography
              fontSize={{ md: "100px", xs: "45px" }}
              fontWeight={700}
              color="primary.back"
              position="absolute"
              top={{ md: 30, xs: 70 }}
              left={{ md: 200, xs: 20 }}
            >
              <Fade left>BNB FarmLand</Fade>
            </Typography>
            <Typography
              fontSize={{ md: "40px", xs: "24px" }}
              fontWeight={700}
              color="primary"
              style={{
                borderStyle: "solid",
                borderWidth: "8px",
                borderImage:
                  "linear-gradient(to right, #40F8A7, transparent 75%)",
                borderImageSlice: 1,
                borderLeft: "double 0px transparent",
                borderRight: "double 0px transparent",
                borderBottom: "double 0px transparent",
              }}
              pt={5}
            >
              <Fade left>Disclaimer</Fade>
            </Typography>
            <Typography
              fontSize={{ md: "16px", xs: "14px" }}
              lineHeight="26px"
              fontWeight={400}
              mt={`40px`}
              color="primary.text"
            >
              <Fade left>
                 Investing in BNB FarmLand carries a high level of risk, and may not be suitable for all investors. Before deciding to invest in BNB FarmLand you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with high-risk projects such as BNB FarmLand, and seek advice from an independent financial advisor.
                
              </Fade>
              <br/>
              <Fade left>
                    BNB FarmLand will not accept liability for any loss or damage, including without limitation to, any loss of profit, which may arise directly or indirectly from use of or reliance on such information.    
              </Fade>
              <br/>
              <Fade left>
              BNB FarmLand makes no representation or warranties as to the accuracy and or timelines of the information contained herein. A qualified professional should be consulted before making any financial decisions.    
              </Fade>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Howtobuy;
