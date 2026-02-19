import {
  faFlutter,
  faLaravel,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faLaptopCode,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hero.css";
import heroImage from "/hero.png";

function Hero() {
  return (
    <>
      <div className="container" id="hero">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>

        <div className="left-container">
          <img
            src={heroImage}
            alt="Ali Shamal - Software Engineer"
            loading="eager"
            width="450"
            height="450"
          />
        </div>

        <div className="right-container">
          <h2>
            Hey friends <span className="hi">👋</span>
          </h2>
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
              {/* Skill cards */}
              <div className="stack-card stack-card-flutter">
                <FontAwesomeIcon icon={faFlutter} className="stack-card-icon" />
                <p>Flutter</p>
              </div>
              <div className="stack-card stack-card-nodeJS">
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
                <FontAwesomeIcon
                  icon={faDatabase}
                  className="stack-card-icon"
                />
                <p>MySQL</p>
              </div>
              <div className="stack-card stack-card-firebase">
                <FontAwesomeIcon icon={faServer} className="stack-card-icon" />
                <p>Firebase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
