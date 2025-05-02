import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import "./styles/main.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
