import "./testimonials.scss";

export default function Testimonials() {
  const data =
    [{
      id: 1,
      Fname: "Federica Lora",
      title: "DCI WebDev student & fellow p/t Class Tutor",
      img: "assets/TFrederica.jpg",
      icon: "assets/TLinked.jpg",
      desc: '   "Laura is always willing to help; she makes time for others and is always willing to offer valuable assistance in finding bugs." ',
      link: "https://www.linkedin.com/in/federica-lora-272a9ba6/"
    },
    {
      id: 2,
      Fname: "Jamie Cartwright",
      title: "DCI Main Class Tutor",
      img: "assets/TJamie.jpg",
      icon: "assets/TLinked.jpg",
      desc: ' "Going forward, I am confident that Laura has the professionalism, drive to succeed and technical curiosity to build a long and successful career in the field of web development."   ',
      link: "https://www.linkedin.com/in/jamie-cartwright-a48559185/",
      featured: true
    },
    {
      id: 3,
      Fname: "Neha Berlia",
      title: "DCI WebDev student & Class Representative",
      img: "assets/TBerlia.jpg",
      icon: "assets/TLinked.jpg",
      desc: '  "She is an enthusiastic participant in all class discussions and jumps at every opportunity to excel at what she is learning." ',
      link: "https://www.linkedin.com/in/neha-berlia/"
    }
    ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map(d => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <a href={d.link} >
                <img src={d.img} alt="" className="user" />
              </a>
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <a href={d.link}>
                <h3>{d.Fname}</h3>
                <h4>{d.title}</h4>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
