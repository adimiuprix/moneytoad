import "./App.css";
import { Box } from "@mui/material";
import Layout from "./Layout";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import React, { lazy} from "react";
import { ElevateAppBar } from "./components/AppBar";
import { HeaderBar } from './components/AppBar'
import { motion } from "framer-motion";
import {CounterProvider,TimeCounterProvider} from "./utils/store";
import {Helmet} from "react-helmet";
const Home = lazy(() => import("./pages/Home"));
const Faq = lazy(() => import("./pages/Faq"));
// const Login = lazy(() => import("./pages/Admin/Login"));

function App() {

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.3,
  };
  return (
    <>
      <CounterProvider>
        <TimeCounterProvider>
        <Helmet>
                <meta charSet="utf-8" />
                <link rel="description" content="Money Toad Miner is a progressive ROI dapp on BSC with a daily earn of 12% and a passive income of 15% from your referrals." />
        </Helmet>
        <Box>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <ElevateAppBar />
                    <Layout>
                      <Home />
                    </Layout>
                    {/* <Footer /> */}
                  </motion.div>
                }
              />
              <Route
                path="/faq"
                element={
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <HeaderBar />
                    <Layout>
                      <Faq />
                    </Layout>
                  </motion.div>
                }
              // {/* <Route
              //   path="/disclaimer"
              //   element={
              //     <motion.div
              //       initial="initial"
              //       animate="in"
              //       exit="out"
              //       variants={pageVariants}
              //       transition={pageTransition}
              //     >
              //       <ElevateAppBar />
              //       <Layout>
              //         <Disclaimer />
              //       </Layout>
              //       <Footer />
              //     </motion.div>
              //   } */}
              />
            </Routes>
          </BrowserRouter>
        </Box>
        </TimeCounterProvider>
      </CounterProvider>
    </>
  );
}

export default App;
