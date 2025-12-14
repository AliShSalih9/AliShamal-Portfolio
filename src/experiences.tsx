import './experiences.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faLocationDot,faLink } from '@fortawesome/free-solid-svg-icons';
 

function Experiences() {  
     

    const experiences=[
         {  
        title:"Mobile Developer @Freelance",
        date:"Aug 2025 - Present",
        location:"Akre",
        link:"",
        description:"Weather App – A mobile application that provides real-time weather information, including temperature, weather conditions, location, and sunrise/sunset times, helping users plan their day efficiently.",
        technologies:["Flutter","Firebase","Figma",],
      },
        
        {  
            
        title:"Web Developer @Freelance",
        date:"Oct 2025 - Present",
        location:"Akre, Kurdistan Region, Iraq",
        link:"",
        description:"Created a web-based platform to collect, manage, and analyze student feedback, enhancing communication between students and faculty.",
        technologies:["PHP","MySQL","BootStrap",],
      },
         {  
        title:"Web Developer @Freelance",
        date:"Aug 2025 - Present",
        location:"Akre, Kurdistan Region, Iraq",
        link:"https://www.facebook.com/pciakre.pciakre/",
        description:"Developed a web-based attendance management system to track, record, and report staff attendance efficiently, improving accuracy and accessibility.",
        technologies:["PHP","MySQL","BootStrap",],
      },
              {  
        title:"C# Developer @Freelance",
        date:"July 2024 - Present",
        location:"Duhok, Kurdistan Region, Iraq",
        link:"",
        description:"POS System for Duhok Market — A simple and efficient point-of-sale application to manage sales, inventory, and transactions for small to medium markets.",
        technologies:["C#","WindowsForm","SQL Server"],
      },
      {  
        title:"C# Developer @Freelance",
        date:"Jun 2023 - Present",
        location:"Erbil, Kurdistan Region, Iraq",
        link:"https://nooralbasra-company.com/",
        description:"Noor Albasr for Cars specializes in quality vehicle sales and transparent service to meet every customer’s needs.",
        technologies:["C#","WindowsForm","SQL Server"],
      },

    ];
       // Now you can safely initialize openStates
 const [openStates, setOpenStates] = useState(
    experiences.map((_, index) => index === 0)
);

const toggleOpen = (index: number) => {
    setOpenStates(prev => {
        const newStates = [...prev];
        newStates[index] = !newStates[index];
        return newStates;
    });
};


    return (
        <>
            <div className="experiences-container" id="exp">
                <h2 className="experiences-header">Experiences</h2>
                <p>Here are the roles and projects that shaped my skills and professional growth. Each experience reflects my dedication to learning, improving, and contributing effectively wherever I work.</p>

                <div className="exp-content">
                    {experiences.map((exp, i) => (
                    <div className="experience-card" key={i}>

                        <div className="exp-header">
                            <h3>{exp.title}</h3>

                            <div className="exp-header-right">
                                <p className='exp_description'>{exp.date}</p>

                                <button
                                    className={`toggle-btn ${openStates[i] ? 'rotate' : ''}`}
                                    onClick={()=>{toggleOpen(i)}}
                                >
                                    {openStates[i] ? '-' : '+'}
                                </button>
                            </div>
                          
                        </div>
                          {openStates[i] && (
                        <div className="exp-details">
                            <hr/>
                            <div className="location-details">
<div className="location">
    <FontAwesomeIcon icon={faLocationDot} style={{color: "#ff7b00",}} />      
<span>{exp.location}</span>
</div>
{ exp.link && <div className="link">
    <FontAwesomeIcon icon={faLink} style={{color: "#ff7b00",}} />      
<span>{exp.link}</span>
</div>      }          </div>
<span>{exp.description}</span>

 
<div className="card-Technologies">

   {exp.technologies.map((techno, index) => (
        <data key={index} value="tech-item">
            {techno}
        </data>
    ))}
</div>
                            </div>
                        
                        )}

                    </div>))}
                </div>
            </div>
        </>
    );
}

export default Experiences;
