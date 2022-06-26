import "./works.scss";
import { MobileScreenShare, ArrowBackIos, ArrowForwardIos, Language } from "@mui/icons-material";
import { useState } from "react";

export default function Works() {
  const [ currentSlider, setCurrentSlider ] = useState(0)
  

      const data = [
      {
        id: "1",
      icon: <Language />,
      title:"Branding",
      desc: " dummy text",
      img: "assets/mac.jpg"
      },
      {
        id: "2",
      icon: <Language />,
      title:"Branding",
      desc: " dummy text",
      img:  "assets/mac.jpg"
      },
      {
        id: "3",
        icon: <Language />,
        title:"Branding",
        desc: " dummy text",
        img:  "assets/mac.jpg"
      }

      ]
      const handleClick = (way) =>{
        way === "left" ? setCurrentSlider(currentSlider>0 ? currentSlider-1:2):
        setCurrentSlider(currentSlider< data.length -1 ?currentSlider +1:0)
      }
      return (

        <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlider *100}vw)`}}>
        {data.map((d) => (

          <div className="container">
            <ArrowBackIos className="arrow left" onClick={()=>handleClick("left")} />
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    {/* <img src={d.img} alt="" /> */}
                    <MobileScreenShare className="icon" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src="assets/mac.jpg" alt="Laura Hesse" />
              </div>
            </div>
            <ArrowForwardIos className="arrow right" onClick={()=>handleClick("left")} />
          </div>
        ))}
      </div>


    </div>
  )
}
