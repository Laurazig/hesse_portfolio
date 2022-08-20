import "./works.scss";
//import { MobileScreenShare, ArrowBackIos, ArrowForwardIos, Language } from "@mui/icons-material";
import { useState } from "react";

export default function Works() {
  const [currentSlider, setCurrentSlider] = useState(0)
 

  const data = [
    {
      id: "1",
      title: "DCI Final project",
      desc: "Under construction: In a team of 4, I have the role of SCRUM master. E-commerce site- vegan organic version of Hello Fresh. To be presented on Sept 6th. ",
      img: "assets/bioBites.jpg",
      link: "https://clone-dci-final.vercel.app/",
      // tech: ["react"]
      tech: "Frontend: SPA React.js. | backend: to be deployed  - MongoDB"
    },
    {
      id: "2",
      // icon: <Language />,
      title: "DCI Jam Hackathon",
      desc: "2 WebDev students, 2 Online Marketing students, 3 gruling days, 1 amazing experience. June 2022",
      img: "assets/W_HackathonShort.jpg",
      link: "https://lenganthanh.github.io/final_inspiration_jam/index.html",
      //tech: ["SCSS", "Bootstrap"]
      tech: "SCSS, Bootstrap"
    },
    {
      id: "3",
      // icon: <Language />,
      title: "www.leipzigg.com",
      desc: "A website I created to inform & build bridges in the local community. Hosted with Azure. 2021",
      img: "assets/W_LeipzigWardrobe.jpg",
      link: "https://www.leipzigg.com/",
      // tech: ["HTML", "CSS"]
      tech: "HTML & CSS"
    }
    // {
    //   id: "1",
    //   title: "Fullstack- Leipzig Wardrobe",
    //   desc: "Frontend: error check forms, add workshop card. Backend: error check forms, admin rights. April - present.",
    //   img: "assets/W_react_Wardrobe.jpg",
    //   link: "https://hesse-final-project2.herokuapp.com",
    //   tech: "MERN stack, Express validation, JWT, cookies, Atlas, MVC, Heroku."
    // },

  ]
  const handleClick = (way) => {
    way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2) :
      setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0)
  }
  return (
    <div className="works" id="works">
      {/* <h1>projects</h1> */}
      <div className="slider" style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
        {data.map((d) => (
          <div className="container">
            <div className="arrowL" onClick={() => handleClick("left")}>◄</div>
            {/* <ArrowBackIos className="arrow left" onClick={()=>handleClick("left")} /> */}
            <a href={d.link} target="_blank" rel="noreferrer">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    {/* <div className="imgContainer">
                     <img src={d.img} alt="" /> 
                    <MobileScreenShare className="icon" /> 
                  </div> */}

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
            {/* <ArrowForwardIos className="arrow right"  onClick={()=>handleClick("left")} /> */}
          </div>
        ))}
      </div>


    </div>
  )
}
