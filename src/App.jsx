import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Resume from "./components/Resume";
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
        <Resume />
        <Contact />
      </main>
    </>
  );
}

export default App;
