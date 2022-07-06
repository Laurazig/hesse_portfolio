import "./testimonials.scss";
//import { DoubleArrow, LinkedIn } from "@mui/icons-material";


export default function Testimonials() {
  const data=
  [  {
      id:1,
      Fname: "Federica Lora",
      title: "DCI WebDev student & fellow p/t Class Tutor",
      img: "assets/TFrederica.jpg",
      icon: "assets/TLinked.jpg",
      desc: '   "Laura is always willing to help; she makes time for others and is always willing to walk you through a whole project, to offer valuable assistance in finding bugs, or simply help you understand certain functionalities." ',
      link: "https://www.linkedin.com/in/federica-lora-272a9ba6/"
      // id:1,
      // Fname: "Margaret Hamilton",
      // title: "Head of Software Engineering  - Apollo missions",
      // img: "assets/margaret_hamilton.jpg",
      // icon: "assets/TLinked.jpg",
      // desc: ' "Laura is a dedicated programmer and passionate about having an influence on the digitalisation of our world!" ',
      // link: "https://en.wikipedia.org/wiki/Margaret_Hamilton_(software_engineer)"
    },
    {
      id:2,
      Fname: "Jamie Cartwright",
      title: "DCI Main Class Tutor",
      img: "assets/TJamie.jpg",
      icon: "assets/TLinked.jpg",
      desc: ' "Going forward, I am confident that Laura has the professionalism, drive to succeed and technical curiosity to build a long and successful career in the field of web development."   ',
      link: "https://www.linkedin.com/in/jamie-cartwright-a48559185/",
      featured: true
    },
    {
      id:3,
      Fname: "Neha Berlia",
      title: "DCI WebDev student & Class Representative",
      img: "assets/TBerlia.jpg",
      icon: "assets/TLinked.jpg",
      desc: '  "She is an enthusiastic participant in all class discussions and jumps at every opportunity to excel at what she is learning." ',
      link: "https://www.linkedin.com/in/neha-berlia-66b14554/"
      
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
          {/* <img src="assets/speech-bubble.png" alt="speech bubble" /> */}
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
