import { useState } from "react";

const Navbar = ({toggleTheme}) => {

  const [open,setOpen] = useState(false);   

  return (
    <nav className="navbar">

      <h2>MyPortfolio</h2>

      <div className={`menu ${open ? "active":""}`}>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div>
        <button onClick={()=>setOpen(!open)}>☰</button>
        <button onClick={toggleTheme}>Theme</button>
      </div>

    </nav>
  );
};

export default Navbar;
