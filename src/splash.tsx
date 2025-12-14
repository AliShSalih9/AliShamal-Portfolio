import { faLaptopCode,faCode,faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import './splash.css';
import { faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Splash() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
        setIsVisible(true);
    });

    return (
        <div className={`splash-screen ${isVisible ? 'visible' : ''}`}>
            <div className="particles-container">
                {[...Array(20)].map((_, index) => (
                    <div key={index} className="particle"
                    style={
                        {
                            left:`${Math.random()*100}%`,
                            animationDelay:`${Math.random()*5}s`,
                            animationDuration:`${10+Math.random() * 10}s`
                        }
                    }
                    
                    />
                ))}
            </div>
            {/* Main Content */}
            <div className="splash-content">
                <div className="icon-wrapper">
                    <div className="icon-glow"></div>
                    <FontAwesomeIcon icon={faLaptopCode} className="splash-icon" />
                </div>
            </div>
            <h1 className='splash-text' data-text="MY PROFILE">MY PROFILE</h1>
<p className="splash-description">
  Full Stack Developer | Software Engineering
</p>

<div className="divider">
    <span className='divider-line'></span>
    <span className='divider-dot'></span>
    <span className='divider-line'></span>
</div>
  <div className="icon-profile">
                    <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="profile-icon-link"
                        aria-label="GitHub"
                    >
                        <div className="icon-bg"></div>
                        <FontAwesomeIcon 
                            icon={faGithub} 
                            className="splash-icon-github" 
                        />
                    </a>

                    <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="profile-icon-link"
                        aria-label="LinkedIn"
                    >
                        <div className="icon-bg"></div>
                        <FontAwesomeIcon 
                            icon={faLinkedin} 
                            className="splash-icon-linkedin" 
                        />
                    </a>

                    <a 
                        href="#" 
                        className="profile-icon-link"
                        aria-label="Projects"
                    >
                        <div className="icon-bg"></div>
                        <FontAwesomeIcon 
                            icon={faCode} 
                            className="splash-icon-code" 
                        />
                    </a>

                    <a 
                        href="#" 
                        className="profile-icon-link"
                        aria-label="About"
                    >
                        <div className="icon-bg"></div>
                        <FontAwesomeIcon 
                            icon={faUser} 
                            className="splash-icon-user" 
                        />
                    </a>
                </div>
                <div className="splash-footer">
                    <span className="splash-subtext">
                        <span className="designer-label">Designed with</span>
                        <span className="heart">❤️</span>
                        <span className="designer-name">by Ali</span>
                    </span>
                </div>
                <div className="scroll-indicator">
                    <div className="scroll-arrow">
                        
                    </div>
                </div>
            </div>
            
    )
}

export default Splash;