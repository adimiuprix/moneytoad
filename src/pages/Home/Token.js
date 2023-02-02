import React from "react";
import { Box, Typography, Grid, Button, Input, Paper } from "@mui/material";
import CHEST from "../../assets/image/Chest.png";
import CHESTBG from "../../assets/image/chest-bg.png";
import COMMUNITYBG from "../../assets/image/Roadmap1.png";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const styles = {
  container: {
    backgroundColor: "#25292e",
    backgroundPosition: "center",
    background: `url(${COMMUNITYBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    overflow: "hidden",
  },
};
function Ask() {
  return (
    <Box
      position="relative"
      overflow="hidden"
      px={{ md: 5, xs: 5 }}
      style={styles.container}
    >
      <Box display="flex" justifyContent={`space-evenly`} alignItems="center" sx={{flexDirection : {md : 'column', xs : 'row'}}}>
        <Grid container spacing={2}>
        </Grid>
      </Box>
    </Box>
  );
}

export default Ask;
