import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App(){

  const [light,setLight] = useState(false);

  const toggleTheme = ()=>{
    document.body.classList.toggle("light");
    setLight(!light);
  };

  return(
    <>
      <Navbar toggleTheme={toggleTheme}/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App;
