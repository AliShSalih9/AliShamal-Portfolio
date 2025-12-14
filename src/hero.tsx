import './hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFlutter,faNodeJs,faLaravel,faReact,} from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode ,faDatabase,faServer} from "@fortawesome/free-solid-svg-icons";
import heroImage from './assets/hero.png';


function Hero() {
    return (
        <>
            <div className="container" id="hero">

                <div className="left-container">
                    <img 
                        src={heroImage} 
                        alt="profile" 
                    />
                </div>

                <div className="right-container">
                    <h2>Hey friends 👋</h2>

                    <p>
                      I'm Ali — a Software Engineer passionate about creating efficient 
                      applications, solving problems, and improving everyday technology.
                    </p>

                    <div className="skill-icon">
<div className="header-stack">
  <FontAwesomeIcon icon={faLaptopCode} className="stack-icon" />
  <h3>Developer Stack</h3>
</div>

<div className="stack-cards">

  <div className="stack-card stack-card-flutter">
    <FontAwesomeIcon icon={faFlutter} className="stack-card-icon" />
    <p>Flutter</p>
  </div>

  <div className="stack-card stack-card-nodeJS" >
    <FontAwesomeIcon icon={faNodeJs} className="stack-card-icon" />
    <p>Node.js</p>
  </div>

  <div className="stack-card stack-card-laravel">
    <FontAwesomeIcon icon={faLaravel} className="stack-card-icon" />
    <p>Laravel</p>
  </div>

  <div className="stack-card stack-card-react">
    <FontAwesomeIcon icon={faReact} className="stack-card-icon" />
    <p>React</p>
  </div>
  <div className="stack-card stack-card-mySql">
    <FontAwesomeIcon icon={faDatabase} className="stack-card-icon" />
    <p>MySQL</p>
  </div>
    <div className="stack-card stack-card-firebase">
<FontAwesomeIcon icon={faServer}  className="stack-card-icon"/>   
 <p>Firebase</p>
  </div>
  
</div>

 </div>
              

                </div>
            </div>
        </>
    )
}

export default Hero;
