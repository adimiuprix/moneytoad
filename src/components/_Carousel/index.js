import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Button, Input } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import useWindowDimensions from "../../hooks/useDimension";
const items = [
  {
    index: 1,
    path: "image/1.png",
  },
  {
    index: 2,
    path: "image/2.png",
  },
  {
    index: 3,
    path: "image/3.png",
  },
  {
    index: 4,
    path: "image/4.png",
  },
  {
    index: 5,
    path: "image/5.png",
  },
  {
    index: 6,
    path: "image/6.png",
  },
];

export default function Carousel() {
  const [moveLength, setMoveLength] = useState(0);
  const [current, setCurrent] = useState(3)
  const unit = window.innerWidth > 1300 ? 260 : 200;
  const handleGoRight = () => {
    //console.log("current = ", current)
    if (current === 6 ) return ;
    // if (window.innerWidth < moveLength + unit) {
    //   setMoveLength(0);
    // } else {
      setMoveLength(moveLength + (current === 3 || current === 4 ? 220 : unit));
    // }
    setCurrent(current + 1)
  };

  const handleGoLeft = () => {
    //console.log("current = ", current)

    if (current === 0) return ;
    // if (window.innerWidth < Math.abs(moveLength)) {
    //   setMoveLength(0);
    // } else {
      setMoveLength(moveLength - (current === 3 || current === 4 ? 220 : unit));
      setCurrent(current - 1)
    // }
  };

  return (
    <Box position={`relative`}>
      <Box
        // className="carousel-btn-group"
        display={`flex`}
        alignItems="flex-end"
        justifyContent="flex-end"
        px={{ md: 30, xs: 5 }}
        width="100%"
      >
        <Button onClick={handleGoLeft}>
          <KeyboardArrowLeftIcon />
        </Button>
        <Button onClick={handleGoRight}>
          <KeyboardArrowRightIcon />
        </Button>
      </Box>
      <Box width={window.innerWidth}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box
            display="flex"
            alignItems={`center`}
            mt="70px"
            overflow={`hidden`}
          >
            {items.map((row) => (
              <Box
                id={`index_${row.index}`}
                className="carousel-index"
                style={{
                  margin: "10px",
                  transform: `translateX(${moveLength}px)`,
                  transition: "transform 1s",
                }}
              >
                <img
                  src={`${row.path}`}
                  style={{
                    width:
                      current !== row.index && (row.index === 1 || row.index === 6)
                        ? window.innerWidth > 800
                          ? "200px"
                          : "180px"
                        : window.innerWidth > 800
                        ? "240px"
                        : "200px",
                  }}
                  alt=""
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// export default Carousel;
