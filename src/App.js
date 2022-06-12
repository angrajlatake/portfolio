import "./App.scss";
import Hero from "./Components/Hero/Hero";
import Stack from "./Components/Stack/Stack";
import Loader from "./Components/Loader/Loader";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import SmoothScroll from "./Components/Function/SmoothScroll";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// make mobile menu disappear once the window is resized
//TODO: add custom pointer
//TODO: show navbar on scroll up
//TODO: Add a parallax effect to the hero
//TODO: Add a parallax effect to the stack
//TODO: Add a parallax effect to the projects
//TODO: adjust hero icons to be smaller

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <SmoothScroll>
      <div className="App">
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
      </div>
    </SmoothScroll>
  );
}

export default App;
