import React from "react";
import { Box, Grid } from "@mui/material";

import TOAD_BANNER2 from "../../assets/image/Money_Toad_logo.png";
import BACKGROUND_GREEN_CURVE from "../../assets/image/GreenCurveBackground.svg";
import Fade from "react-reveal/Fade";
import useWindowDimensions from "../../hooks/useDimension";
const styles = {
  container: {
    backgroundImage: `url(${BACKGROUND_GREEN_CURVE})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    minHeight: "100vh",
  },
};
function Banner() {
  const { width } = useWindowDimensions();
  return (
    <Box mb={10}>
      <Box style={styles.container}>
        <Box
          position="relative"
          overflow="hidden"
          px={{ md: 10, xs: 5 }}
          py={25}
        >
          <Grid container alignItems="center" justifyContent="center">
            
            <Grid item xs={12} sm={12}>
              <Box style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Fade right>
                  <img
                    src={TOAD_BANNER2}
                    alt="toad"
                    width={width < 700 ? "100%" : "50%"}
                  />
                </Fade>
              </Box>              
              </Grid>
          </Grid>

        </Box>

      </Box>
      
      <Fade top>
        <Box
          display="flex"
          px={{ md: 30, xs: 5 }}

          justifyContent={{ md: "flex-start", xs: "center" }}
        >
        </Box>
      </Fade> 
    </Box>
  );
}

export default Banner;
