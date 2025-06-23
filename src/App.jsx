import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import "./styles/main.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default App;
