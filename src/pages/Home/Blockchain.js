import React from "react";
import { Box, Typography } from "@mui/material";
import BLOCKCHAIN from "../../assets/image/blockchain.svg";
import Fade from "react-reveal/Fade";
import useWindowDimensions from "../../hooks/useDimension";

function Blockchain() {
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
      <Box py={10}>
        <Typography
          fontSize={{ md: "100px", xs: "45px" }}
          fontWeight={700}
          color="primary.back"
          position="absolute"
          top={{ md: 70, xs: 105 }}
          left="50%"
          style={{ transform: "translateX(-50%)" }}
        >
          <Fade top>TEAM</Fade>
        </Typography>
        <Typography
          fontSize={{ md: "40px", xs: "24px" }}
          fontWeight={700}
          color="primary"
        >
          <Fade top>TEAM</Fade>
        </Typography>
      </Box>
      <Box display="flex" justifyContent={`space-around`} width='100%' flexWrap={`wrap`}>
        <Box mt="55px" sx={{width : {md : '30%', xs : '45%'}}}>
          <Box
            fontWeight={700}
            fontSize={`12px`}
            lineHeight={`24px`}
            textAlign="center"
            color={`#FFFFFF`}
          >
            ROBERT VIOREL 
          </Box>
          <Box
            fontWeight={500}
            fontSize={`12px`}
            lineHeight={`24px`}
            textAlign="center"
            color={`#FFFFFF`}
            mt='10px'
          >
            Co-Founder
          </Box>
          <Box
            fontWeight={500}
            fontSize={`12px`}
            lineHeight={`24px`}
            textAlign="center"
            color={`#50E3C2`}
          >
            Robert_D@boxa.token.io
          </Box>
        </Box>
        <Box mt="55px" sx={{width : {md : '30%', xs : '45%'}}}>
          <Box
            fontWeight={700}
            fontSize={`12px`}
            lineHeight={`24px`}
            textAlign="center"
            color={`#FFFFFF`}
          >
            JOHNNY FALCONES 
          </Box>
          <Box
            fontWeight={500}
            fontSize={`12px`}
            lineHeight={`24px`}
            textAlign="center"
            color={`#FFFFFF`}
            mt='10px'
          >
            Co-Founder
          </Box>
          <Box
            fontWeight={500}
            fontSize={`12px`}
            lineHeight={`24px`}
            textAlign="center"
            color={`#50E3C2`}
          >
            JF@boxa-token.io
          </Box>
        </Box>
        <Box mt="55px" sx={{width : {md : '30%', xs : '45%'}}}>
          <Box
            fontWeight={700}
            fontSize={`12px`}
            lineHeight={`24px`}
            textAlign="center"
            color={`#FFFFFF`}
          >
            JORGE EMILIO
          </Box>
          <Box
            fontWeight={500}
            fontSize={`12px`}
            lineHeight={`24px`}
            textAlign="center"
            color={`#FFFFFF`}
            mt='10px'
          >
            Co-Founder
          </Box>
          <Box
            fontWeight={500}
            fontSize={`12px`}
            lineHeight={`24px`}
            textAlign="center"
            color={`#50E3C2`}
          >
            Jorge_Emilio@boxa-token.io
          </Box>
        </Box>
        <Box mt="55px" sx={{width : {md : '30%', xs : '45%'}}}>
          <Box
            fontWeight={700}
            fontSize={`12px`}
            lineHeight={`24px`}
            textAlign="center"
            color={`#FFFFFF`}
          >
            J.C. SALGADO
          </Box>
          <Box
            fontWeight={500}
            fontSize={`12px`}
            lineHeight={`24px`}
            textAlign="center"
            color={`#FFFFFF`}
            mt='10px'
          >
            Corporate General manager 
          </Box>
          <Box
            fontWeight={500}
            fontSize={`12px`}
            lineHeight={`24px`}
            textAlign="center"
            color={`#50E3C2`}
          >
            Salgado@boxa-token.io
          </Box>
        </Box>
        <Box mt="55px" sx={{width : {md : '30%', xs : '45%'}}}>
          <Box
            fontWeight={700}
            fontSize={`12px`}
            lineHeight={`24px`}
            textAlign="center"
            color={`#FFFFFF`}
          >
            CARLOS FRANZONI
          </Box>
          <Box
            fontWeight={500}
            fontSize={`12px`}
            lineHeight={`24px`}
            textAlign="center"
            color={`#FFFFFF`}
            mt='10px'
          >
            Public Relations
          </Box>
          <Box
            fontWeight={500}
            fontSize={`12px`}
            lineHeight={`24px`}
            textAlign="center"
            color={`#50E3C2`}
          >
            Carlos-Franzoni@boxa-token.io
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Blockchain;
