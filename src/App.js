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

class App extends Component {
  render() {
    return (
      <div className="">
        <Home />
        <About />
        <Skill />
        <Project />
        <Experience />
        <Misc />
        <Contact />
      </div>
    );
  }
}

export default App;
