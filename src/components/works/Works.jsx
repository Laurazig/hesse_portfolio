import "./works.scss";
//import { MobileScreenShare, ArrowBackIos, ArrowForwardIos, Language } from "@mui/icons-material";
import { useState } from "react";

export default function Works() {
  const [currentSlider, setCurrentSlider] = useState(0)
 
  const data = [
    // {
    //   id: "1",
    //   title: "DCI Final project",
    //   desc: "MERN stack- Under construction: In a team of 4, I have the role of SCRUM master. E-commerce site: vegan organic version of Hello Fresh. To be presented on Sept 6th. ",
    //   img: "assets/bioBites.jpg",
    //   link: "https://biobites.herokuapp.com",
    //   tech: "Frontend: SPA React.js. | backend: MongoDB, Express, Node.js, JWT, bcrypt"
    // },
    // {
    //   id: "1",
    //   title: "BioBites: eCommerce",
    //   desc: "A vegan organic version of Hello Fresh cooking kits. MERN stack: In a team of 4, I had the role of SCRUM master and fullstack developer. July, Aug, Sept 2022. ",
    //   img: "assets/bioBites.jpg",
    //   link: "https://biobites.vercel.app/",
    //   // link: "https://biobites.herokuapp.com/",
    //   tech: "Frontend: SPA React.js. (deployed) | backend: MongoDB, Express, Node.js, JWT, bcrypt (not deployed)."
    // },
    {
      id: "1",
      title: "Needles Craft & Kultur",
      desc: "Community textile project I lead @ Grassi Museum. In construction: SPA but plan fullstack. July 2023. ",
      img: "assets/Needles-craft-kulture.png",
      link: "https://needles-craft-kultur.vercel.app/",
      tech: "React.js, Nextjs, TailwindCSS"
    },
    
    // {
    //   id: "2",
    //   title: "DCI Jam Hackathon",
    //   desc: "2 WebDev students, 2 Online Marketing students, 3 grueling days, 1 amazing experience. June 2022",
    //   img: "assets/W_HackathonShort.jpg",
    //   link: "https://lenganthanh.github.io/final_inspiration_jam/index.html",
    //   //tech: ["SCSS", "Bootstrap"]
    //   tech: "SCSS, Bootstrap"
    // },
    {
      id: "3",
      title: "SPA Leipzig Wardrobe",
      desc: "An information website with search functionality for textile workshops and makers. Add a workshop to the list. 2022",
      img: "assets/W_react_Wardrobe_black.jpg",
      link: "https://leipzig-wardrobe-react.vercel.app/",
      tech: "React, CSS"
    },
    {
      id: "4",
      // icon: <Language />,
      title: "Leipzig Wardrobe",
      desc: "A website I created to inform & build bridges in the local community. Displayed on my Instagram. 2021",
      img: "assets/W_LeipzigWardrobe.jpg",
      link: "https://laurazig.github.io/leipzigWardrobe/",
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
