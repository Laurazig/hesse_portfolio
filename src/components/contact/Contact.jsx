// import { useState } from "react";
// import react from "react"
import "./contact.scss";
// import { Person, Mail, GitHub, LinkedIn } from "@mui/icons-material";

export default function Contact() {
  // const [message, setMessage] = useState(false)
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true)
  // }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/mac.jpg" alt="" />
      </div>
      <div className="right">
        <h1>Contact</h1>
        <div id="conBox">
          <div className="conIcon">
            {/* <Mail className="icon" /> */}
            <h3>laura.hesse@pm.me</h3>
          </div>

          <div className="conIcon">
            {/* <Person className="icon" /> */}
            <h3>+49 163 546 7844</h3>
          </div>
          <div className="conIcon">
            <a href="https://www.linkedin.com/in/laura-hesse-a998048a" target="_blank" rel="noreferrer">
              {/* <LinkedIn className="icon" /> */}
              <img src="assets/TLinked2.jpg" alt="" className="icon" />
            </a>
            <a href="https://github.com/Laurazig" target="_blank" rel="noreferrer">
              <img src="assets/githubIcon.jpg" alt="" className="icon" />
            </a>
            {/* <a href="https://twitter.com/zukunfty" target="_blank" rel="noreferrer">
              <img src="assets/twitter.png" alt="" className="icon" />
            </a>
            <a href="https://www.instagram.com/leipzig.wardrobe/"target="_blank" rel="noreferrer">
              <img src="assets/instagram.png" alt="" className="icon" />
            </a> */}
          </div>
        </div>
        {/* <a href="https://www.linkedin.com/groups/12668793/" className="white" target="_blank" rel="noreferrer">
          <div className="left">
            <p>Why not join my 'Women Who Code' group on LinkedIn or recommend it to a friend?!</p>
          </div>
          <div className="right"> */}
        {/* <LinkedIn className="icon" /> */}
        {/* <img src="assets/Contact_LinkedInGroup.jpg" alt="LinkedIn screenshot of group" /> */}
        {/* <img src="assets/TLinked2.jpg" alt="" />
          </div>
        </a> */}

        {/* <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form> */}
        <a href="https://www.meetup.com/de-DE/OpenTechSchool-Leipzig/?_cookie-check=6cqxXycmBYZwpL_I" className="white" target="_blank" rel="noreferrer">
          <div className="left">
            <p>Come and code with me at the weekly OpenTechSchool meetup in Leipzig! </p>
          </div>
          <div className="right">
            <img src="assets/Meetup_Logo.png" alt="" />
          </div>
        </a>
      </div>
    </div>
  )
}

