import React, { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Typography, Grid, Button, Input } from "@mui/material";
import "./carousel.css";

const Carousel = (props) => {
  const { children, show } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [touchPosition, setTouchPosition] = useState(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <Box className="carousel-container">
      <Box
        // className="carousel-btn-group"
        display={`flex`}
        alignItems="flex-end"
        justifyContent="flex-end"
        px={{ md: 30, xs: 20 }}
        width="100%"

      >
        <Button onClick={next}>
          <KeyboardArrowLeftIcon />
        </Button>
        <Button onClick={prev}>
          <KeyboardArrowRightIcon />
        </Button>
      </Box>
      <Box
        className="carousel-wrapper"
        px={{ md: 30, xs: 5 }}
        py={{ md: "90px" }}
      >
        {/* You can alwas change the content of the button to other things */}

        <Box
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <Box
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {children}
          </Box>
        </Box>
        {/* You can alwas change the content of the button to other things */}
      </Box>
    </Box>
  );
};

export default Carousel;
