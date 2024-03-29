import "./intro.scss"
//import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
//import Typewriter from 'typewriter-effect';

export default function Intro() {


  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/LaurHesseNoBg.png" alt="Laura hesse" className="bounce-in-left " />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <p className="newPortfolio">This portfolio has been replaced. Check out the 2023 version</p>
          <a href="https://portfolio-laura-0723.vercel.app/" target="_blank" className="newPortfolioLink" rel="noreferrer"><div>new portfolio</div></a>
          <h2>Hi There, I'm</h2>
          <h1>Laura Hesse</h1>
          {/* <div className="typer">
            <Typewriter className="typewriter"
              options={{
                strings: ['Frontend', 'Backend', 'Chocolate Eating','Full Stack'],
                autoStart: true,
                loop: true,
              }}
            />
            <h3> Developer  </h3>
          </div> */}
         <h3> Full Stack Developer  </h3>

         
        </div>
        <a href="#works" className="rightArrow">
          <div className="arrow">▼</div> 
          {/* <KeyboardArrowDownIcon className="introArrowDown" /> */}
        </a>
      </div>
    </div>
  )
}
