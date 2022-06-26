import "./testimonials.scss";
// import { DoubleArrow, LinkedIn } from "@mui/icons-material";


export default function Testimonials() {
  const data=
  [  {
      id:1,
      Fname: "Federica Lora",
      title: "DCI WebDev student & fellow p/t Class Tutor",
      img: "assets/TFrederica.jpg",
      icon: "assets/TLinked.jpg",
      desc: '   coming soon ',
      link: "https://www.linkedin.com/in/federica-lora-272a9ba6/"
    },
    {
      id:2,
      Fname: "Neha Berlia",
      title: "DCI WebDev student & Class Representative",
      img: "assets/TBerlia.jpg",
      icon: "assets/TLinked.jpg",
      desc: '  "She is an enthusiastic participant in all class discussions and jumps at every opportunity to excel at what she is learning." ',
      link: "https://www.linkedin.com/in/neha-berlia-66b14554/",
      featured: true
    },
    {
      id:3,
      Fname: "Jamie Cartwright",
      title: "DCI Main Class Tutor",
      img: "assets/TJamie.jpg",
      icon: "assets/TLinked.jpg",
      desc: '   coming soon ',
      link: "https://www.linkedin.com/in/jamie-cartwright-a48559185/"
    }
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map(d=>(
          
          <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            {/* <img src="assets/arrowBentTestimonial.jpg" alt="" className="left" /> */}
            {/* <div className="left"><DoubleArrow/></div> */}
            <img src={d.img} alt="" className="user"/>
            <a href="{d.link}" >
              {/* <LinkedIn className="LinkedIn"/> */}
            </a>
            
            
            {/* <img src={d.icon} alt="" className="right" /> */}
          </div>
          <div className="center">
          {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.Fname}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
