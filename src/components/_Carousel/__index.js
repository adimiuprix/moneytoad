import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./styles.scss";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const CustomItem = styled((props) => <div {...props} />)`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: ${(props) =>
    `hsl(280deg, 40%, calc(100% - ${props.offset} * 50%));`};
  border-radius: 1rem;
  color: #9ca3af;
  text-align: justify;
  transition: all 0.3s ease-out;
`;
const CustomCarouselContainer = styled((props) => <div {...props} />)`
  position: absolute;
  // width: 100%;
  /* height: 100%; */
  transform: ${(props) => `rotateY(calc(${props.offset} * 50deg)) 
      // scale(calc(1 + ${props.abs} * -0.6))
      scale(calc(0.8))
      translateZ(calc(${props.abs} * -50rem))
      translateX(calc(${props.offset} / ${props.abs} * -15rem))`};
  transition: all 0.3s ease-out;
  @media only screen and (max-width: 1350px) {
    transform: ${(props) => `rotateY(calc(${props.offset} * 50deg)) 
      // scale(calc(1 + ${props.abs} * -0.6))
      scale(calc(0.8))
      translateZ(calc(${props.abs} * -30rem))
      translateX(calc(${props.offset} / ${props.abs} * -7rem))`};
  transition: all 0.3s ease-out;
}
}
`;

const MAX_VISIBILITY = 6;

export const Card = ({ offset, children }) => (
  <CustomItem offset={offset}>{children}</CustomItem>
);

export const Carousel = ({ children, className, style }) => {
  const [active, setActive] = useState(3);
  const count = React.Children.count(children);

  return (
    <div
      className={className + " carousel"}
      style={{ ...style, display: "flex", alignItems: "center" }}
    >
      <Box
        className="carousel-btn-group"
        display={`flex`}
        alignItems="flex-end"
        justifyContent="flex-end"
        width="100%"
      >
        <Button onClick={() => setActive((i) => i + 1)}>
          <ArrowBackIosNewIcon />
        </Button>
        <Button onClick={() => setActive((i) => i - 1)}>
          <ArrowForwardIosIcon />
        </Button>
      </Box>
      {React.Children.map(children, (child, i) => (
        <CustomCarouselContainer
          key={i}
          abs={Math.abs(active - i) / 6}
          offset={(active - i) / 6}
          style={{
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </CustomCarouselContainer>
      ))}
    </div>
  );
};
