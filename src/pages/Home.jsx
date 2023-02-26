import React, { useState } from "react";
import Hero from "../Components/Hero/Hero";
import Loader from "../Components/Loader/Loader";
import Stack from "../Components/Stack/Stack";
import Navbar from "../Components/Navbar/Navbar";
import Projects from "../Components/Projects/Projects";
import Footer from "../Components/Footer/Footer";
import SmoothScroll from "../Components/Function/SmoothScroll";

import { motion, AnimatePresence } from "framer-motion";
const Home = () => {
  const [loading, setLoading] = useState(true);
  return (
    <SmoothScroll>
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Navbar />
            <Hero layoutId="hero" />
            <Stack />
            <Projects />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </SmoothScroll>
  );
};

export default Home;
