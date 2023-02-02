import React from "react";
import { Box, Typography} from "@mui/material";
import ECO_SYSTEM from "../../assets/image/Group 8852.png";

import Fade from "react-reveal/Fade";
import useWindowDimensions from "../../hooks/useDimension";

function Ecosystem() {
  const { width } = useWindowDimensions();
  return (
    <Box
      position="relative"
      px={{ md: 30, xs: 5 }}
      py={5}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Box>
        <Typography
          fontSize={{ md: "100px", xs: "45px" }}
          fontWeight={700}
          color="primary.back"
          position="absolute"
          top={{ md: -10, xs: 25 }}
          left="50%"
          style={{ transform: "translateX(-50%)" }}
        >
          <Fade top>DISCLAIMER</Fade>
        </Typography>
        <Typography
          fontSize={{ md: "40px", xs: "24px" }}
          fontWeight={700}
          color="primary"
        >
          <Fade top>DISCLAIMER</Fade>
        </Typography>
        <Typography
          fontSize={{ md: "16px", xs: "12px" }}
          lineHeight="26px"
          fontWeight={400}
          color="primary.text"
        >
          <Fade top>
          WARNING:BNB Farm Land is a high-risk ROI dapp. As such, only invest what you are willing to lose, as you may lose it all. DYOR (DO YOUR OWN RESEARCH) !
          </Fade>
        </Typography>
      </Box>
      <Box>
        <Fade bottom>
          <img
            src={ECO_SYSTEM}
            alt="eco system"
            width={width < 500 ? "100%" : ""}
          />
        </Fade>
      </Box>
      
    </Box>
  );
}

export default Ecosystem;
