import React from "react";
import Hero from "../Components/Hero/Hero";
import Projects from "../Components/Projects/Projects";
import Stack from "../Components/Stack/Stack";

const Home = () => {
  return (
    <>
      <Hero layoutId="hero" />
      <Stack />
      <Projects />
    </>
  );
};

export default Home;
