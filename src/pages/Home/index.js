import React from "react";
import Banner from "./Banner";
import CentralHub from "./CentralHub";
import BACKGROUND from "../../assets/image/bodybg.svg";
import Box from "@mui/material/Box";


const styles = {
  container: {
    backgroundColor: "black",
    backgroundImage: `url(${BACKGROUND})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    overflow: "hidden",
  },
};

function Home() {
 
  return (
    <>
      <Banner/>
    </>
  );
}

export default Home;
