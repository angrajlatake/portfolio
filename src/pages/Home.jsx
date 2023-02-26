import React from "react";
import Hero from "../Components/Hero/Hero";
import Projects from "../Components/Projects/Projects";
import Stack from "../Components/Stack/Stack";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Loader from "../Components/Loader/Loader";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  const [loading, setLoading] = useState(true);
  return (
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
  );
};

export default Home;
