import "./works2.scss";
//import { MobileScreenShare, ArrowBackIos, ArrowForwardIos, Language } from "@mui/icons-material";
import { useState } from "react";

export default function Works2() {
  const [currentSlider, setCurrentSlider] = useState(0)

  const data = [
   
    {
      id: "4",
      title: "SPA Leipzig Wardrobe",
      desc: "Add a workshop to the list",
      img: "assets/W_react_Wardrobe_black.jpg",
      link: "https://leipzig-wardrobe-react.vercel.app/",
      tech: "React, CSS"
    },
    {
      id: "5",
      title: "Fullstack- Leipzig Wardrobe",
      desc: "Frontend: error check forms, add workshop card (deployed). Backend: error check forms, admin rights (not deployed). April - present.",
      img: "assets/W_react_Wardrobe.jpg",
      link: "https://biobites.vercel.app/",
      // link: "https://hesse-final-project2.herokuapp.com",
      tech: "MERN stack, Express validation, JWT, cookies, Atlas, MVC, Heroku."
    },
    {
      id: "6",
      title: "Fullstack- Leipzig Makers",
      desc: "search a database of clothes makers in Leipzig and see a map.",
      img: "assets/W_LeipzigMakers.jpg",
      link: "",
      tech: "MERN stack, MongoDB Atlas, MVC, Heroku."
    },
  ]
  const handleClick = (way) => {
    way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2) :
      setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0)
  }
  return (
    <div className="works2" id="works2">
      <div className="slider" style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
        {data.map((d) => (
          <div className="container">
            <div className="arrowL" onClick={() => handleClick("left")}>◄</div>
            <a href={d.link} target="_blank" rel="noreferrer">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <span>{d.tech}</span>
                  </div>
                </div>
                <div className="right">
                  <img src={d.img} alt="images of websites " />
                </div>
              </div>
            </a>
            <div className="arrowR" onClick={() => handleClick("left")}>►</div>
          </div>
        ))}
      </div>
    </div>
  )
}
