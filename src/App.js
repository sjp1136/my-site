import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Experience from "./Components/Experience";
import Resume from "./Components/Resume";
import Misc from "./Components/Misc";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div className="column">
        <Home />
        {/* <Navbar /> */}

        <About />
        <Skill />
        <Project />
        <Experience />
        <Misc />
        <Footer />
      </div>
    );
  }
}

export default App;
