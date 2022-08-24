import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
//import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
//import Works2 from "./components/works2/Works2";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
 import Menu from "./components/menu/Menu"
import React, { useState } from "react"
import "./app.scss"

function App() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div className="app">
          <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <div className="sections">
            <Intro />  
            {/* <Portfolio/> */}
            <Works />
            {/* <Works2 /> */}
            <Testimonials/>
            <Contact/>
          </div> 
    </div>
  );
}

export default App;
