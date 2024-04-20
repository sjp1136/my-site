import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Experience from "./Components/Experience";
import Misc from "./Components/Misc";
import Contact from "./Components/Contact";

import { ParallaxProvider } from "react-scroll-parallax";

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Home />
        <About />
        {/* <Skill /> */}
        <Experience />
        <Project />
        {/* <Misc /> */}
        <Contact />
      </ParallaxProvider>
    );
  }
}

export default App;
