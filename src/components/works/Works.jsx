import "./works.scss";
//import { MobileScreenShare, ArrowBackIos, ArrowForwardIos, Language } from "@mui/icons-material";
import { useState } from "react";

export default function Works() {
  const [currentSlider, setCurrentSlider] = useState(0)


  const data = [
    {
      id: "1",
      // icon: <Language />,
      title: "DCI Jam Hackathon",
      desc: "2 WebDev students, 2 Online Marketing students, 3 gruling days, 1 amazing experience. June 2022",
      img: "assets/W_HackathonShort.jpg",
      link: "https://lenganthanh.github.io/final_inspiration_jam/index.html",
      buttons: ["SCSS", "Bootstrap"]
    },
    {
      id: "2",
      // icon: <Language />,
      title: "Leipzig Wardrobe",
      desc: "React version of my static leipzigg.com site. Deployed with Vercel. Created April 2022 & still under construction.",
      img: "assets/W_react_Wardrobe.jpg",
      link: "https://leipzig-wardrobe-react.vercel.app/"
    },
    {
      id: "3",
      // icon: <Language />,
      title: "www.leipzigg.com",
      desc: "HTML & CSS website I created to inform & build bridges in the local community. Hosted with Azure. 2021",
      img: "assets/W_LeipzigWardrobe.jpg",
      link: "https://www.leipzigg.com/"
    }

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
            <div className="arrowL" onClick={()=>handleClick("left")}>◄</div>
            {/* <ArrowBackIos className="arrow left" onClick={()=>handleClick("left")} /> */}
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                 {/* <div className="imgContainer">
                     <img src={d.img} alt="" /> 
                    <MobileScreenShare className="icon" /> 
                  </div> */}
                  <a href={d.link} target="_blank" rel="noreferrer">
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                  </a>

                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">

                <img src={d.img} />
              </div>
            </div>
            <div className="arrowR">►</div>
            {/* <ArrowForwardIos className="arrow right"  onClick={()=>handleClick("left")} /> */}
          </div>
        ))}
      </div>


    </div>
  )
}
