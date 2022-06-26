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
        <a href="#portfolio">
          {/* <KeyboardArrowDownIcon className="introArrowDown" /> */}
        </a>
      </div>
    </div>
  )
}
