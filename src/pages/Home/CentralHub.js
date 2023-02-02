import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import BOXA_CENTRAL_HUB from "../../assets/image/Boxa PreLaunch.png";
import useWindowDimensions from "../../hooks/useDimension";

function CentralHub() {
  const { width } = useWindowDimensions();
  return (
    <Box position="relative" px={{ md: 30, xs: 5 }} py={5}>
      <Grid container alignItems="flex-start" justifyContent="space-between">
        <Grid display={{ md: "block", xs: "none" }} item xs={12} md={5}>
            <img src={BOXA_CENTRAL_HUB} alt="boxa central hub" width="300px" />
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography
            fontSize={{ md: "100px", xs: "45px" }}
            fontWeight={700}
            color="primary.back"
            position="absolute"
            top={{ md: 0, xs: 25 }}
            right={{ md: 400, xs: 150 }}
          >
            HOW TO PLAY
          </Typography>
          <Typography
            fontSize={{ md: "40px", xs: "24px" }}
            fontWeight={700}
            color="primary"
          >
            {`How To Play`}
          </Typography>
          <Typography
            fontSize={{ md: "16px", xs: "12px" }}
            lineHeight="26px"
            fontWeight={400}
            color="primary.text"
          >
            
            Deposit BNB in exchange for FARMS.
              <br/>
              FARMS generate 20% of daily income that you can check under My Rewards.
              <br/>
              * Follow the 6:1 protocol to extend the life of the platform.
              <br/>
              That means Compounding your earnings 6 days, followed by claiming the 7th day.
          </Typography>
        </Grid>
        <Grid
          display={{ md: "none", xs: "block" }}
          item
          xs={12}
          md={5}
          textAlign={{ xs: "center" }}
          pt={{ md: 0, xs: 10 }}
        >
            <img
              src={BOXA_CENTRAL_HUB}
              alt="boxa central hub"
              width={width < 500 ? "80%" : ""}
            />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CentralHub;
