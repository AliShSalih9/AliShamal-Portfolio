 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import aboutIcon from './assets/about-icon.png'

import { 
  faLinkedin, 
  faGithub, 
  faTelegram, 
  faInstagram, 
  faFacebook,
 
} from '@fortawesome/free-brands-svg-icons';
import { 
  
  faUserGraduate,
  faLaptopCode
} from '@fortawesome/free-solid-svg-icons';

function About() {
  const addHoverEffect = (e: { currentTarget: { style: { transform: string; boxShadow: string; }; }; }) => {
  e.currentTarget.style.transform = 'translateY(-5px)';
  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
};

const removeHoverEffect = (e: { currentTarget: { style: { transform: string; boxShadow: string; }; }; }) => {
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
};
const timelineData = [
  {
    year: "2019 - 2020",
    icon: faUserGraduate,
    title: "High School",
    description: "Completed high school at Amadaya Bakhteyare High School, Akre.",
    color: "#4CAF50" // High School green
  },
  {
    year: "2023 - 2024",
    icon: faLaptopCode,
    title: "Bachelor's in Information Technology",
    description: "Completed Bachelor's degree in Information Technology at DPU, focusing on software development, databases, and modern IT technologies.",
    color: "#0A84FF" // Bachelor's IT blue
  }
];




  return (
     <div className="about-container" id='about'>
      <div className="header-about">
        <h2 className="about-name">About Me</h2>
 
      </div>
      <div className="profileSection">
        <div className="avatarWrapper">
          <div className="avatarRing">
<img src={aboutIcon} alt="Ali Shamal" className="avatar" />
            <h3 className="about-name">Ali Shamal</h3>
            <p className="about-title">Software Engineer</p>
            
          </div>
          <div className="socialIcons">
        <a 
  href="https://www.linkedin.com/in/ali-shamal-895516288/" 
  className="socialIcon" 
  target="_blank"
  style={{ color: "#0A66C2" }}
>
  <FontAwesomeIcon icon={faLinkedin} />
</a>

<a 
  href="https://github.com/AliShSalih9" 
  className="socialIcon" 
  target="_blank"
  style={{ color: "#181717" }}
>
  <FontAwesomeIcon icon={faGithub} />
</a>

<a 
  href="https://t.me/AliSh_Salih9" 
  className="socialIcon" 
  target="_blank"
  style={{ color: "#0088CC" }}
>
  <FontAwesomeIcon icon={faTelegram} />
</a>

<a 
  href="https://www.instagram.com/alishamal.dev/" 
  className="socialIcon" 
  target="_blank"
  style={{ color: "#E4405F" }}
>
  <FontAwesomeIcon icon={faInstagram} />
</a>

<a 
  href="https://www.facebook.com/ali.sh.salih.2025" 
  className="socialIcon" 
  target="_blank"
  style={{ color: "#1877F2" }}
>
  <FontAwesomeIcon icon={faFacebook} />
</a>

            
            </div>
              
        </div>
         <div className="bioCard">
          <p className="bioText">
            I am a dedicated <strong>Software Engineer</strong> with a strong foundation in <strong>Information Technology (IT)</strong>, having completed my studies at <strong>Akre College, DPU</strong>.
          </p>
          <p className="bioText">
            With hands-on experience across mobile, backend, and web development, I specialize in <strong>Flutter</strong>, <strong>Laravel</strong>, <strong>Node.js</strong>, and <strong>React</strong>.
          </p>
          <p className="bioText">
            My work focuses on creating fast, scalable, and user-friendly systems, transforming ideas into polished digital products that solve real-world problems.
          </p>
        </div>
      </div>
      <div className="roadmapSection">
        <h3 className="roadmapTitle">Education</h3>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div key={index} className="timelineItem">
              
              <div className="timelineContent" >
              <div className="iconCircle" style={{borderColor:item.color}} onMouseEnter={addHoverEffect} onMouseLeave={removeHoverEffect}>
                 <FontAwesomeIcon 
                    icon={item.icon}  style={{color: item.color}
                    }
                    className="timelineIcon"
                   />
              </div>
              <div className="Education-card" style={{borderLeft:`4px solid ${item.color}`}} onMouseEnter={addHoverEffect} onMouseLeave={removeHoverEffect}>
<span className="timelineYear">{item.year}</span>
<h4 className="timelineTitle">{item.title}</h4>
<p className="timelineDescription">{item.description}</p>
              </div>
              </div>
              {index<timelineData.length-1 && <div className="connector" style={{background:item.color}}></div>}
              </div>
          ))}</div>
      </div>
     </div>
  );

}
// Add hover effects via inline event handlers


export default About;