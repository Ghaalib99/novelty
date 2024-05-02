import { useState } from "react";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Why from "./components/Why";
import Values from "./components/Values";

function App() {
  return (
    <>
      <Hero />
      <Content />
      <Values />
      <Why />
      <Footer />
    </>
  );
}

export default App;
