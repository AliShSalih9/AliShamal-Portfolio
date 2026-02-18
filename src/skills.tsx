import './skills.css'
 

function skills()
{

const skills = [
      { name: "Flutter", description: "Framework for cross-platform mobile apps.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/flutter.svg", color: "#02569B" },
  { name: "Firebase", description: "Backend platform with authentication, database, and hosting.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/firebase.svg", color: "#FFCA28" },

  { name: "PHP", description: "Server-side scripting language for web apps.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/php.svg", color: "#777BB4" },
  { name: "Laravel", description: "PHP framework for secure and scalable web applications.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/laravel.svg", color: "#FF2D20" },
  { name: "JavaScript", description: "Language for dynamic and interactive web pages.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/javascript.svg", color: "#F7DF1E" },
  { name: "React", description: "Library for building fast, reusable UI components.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/react.svg", color: "#61DAFB" },
  { name: "Node.js", description: "JavaScript runtime for backend applications.",   logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/nodedotjs.svg", 
 color: "#339933" },
  { name: "C# / Windows Forms", description: "Desktop apps and POS systems with SQL backend.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/csharp.svg", color: "#239120" },
  { name: "SQL / Database", description: "Database design, queries, and management.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/mysql.svg", color: "#4479A1" },
  { name: "MongoDB", description: "NoSQL database for flexible, scalable data.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/mongodb.svg", color: "#47A248" },
  { name: "HTML", description: "Structuring web pages with semantic HTML.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/html5.svg", color: "#E34F26" },
  { name: "CSS", description: "Styling websites, layouts, and animations.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/css3.svg", color: "#1572B6" },
 ];

    return <>
    <div className="skills-container" id="skills">
        <h2 className='section-title-underline'>My Skills</h2>
        <p>This page showcases all the tools and technologies I work with.
Each skill highlights my expertise and experience in building real-world applications.</p>
        <div className="skill-item">
            <div className="skill-content">
               <div className="skills-logos">
{skills.map((skill) => (
  <div key={skill.name} className='skill-card' style={{ textAlign: 'center', margin: '10px 0px 10px 3px'  }}>
    <div style={{
      width: '50px',
      height: '50px',
      backgroundColor: skill.color,
      maskImage: `url(${skill.logo})`,
      WebkitMaskImage: `url(${skill.logo})`,
      maskSize: 'contain',
      WebkitMaskSize: 'contain',
      maskRepeat: 'no-repeat',
      WebkitMaskRepeat: 'no-repeat',
      maskPosition: 'center',
      WebkitMaskPosition: 'center',
     }} />
    <h3>{skill.name}</h3>
    <p className='skill-card-description'>{skill.description}</p>
  </div>
))}

</div>

            </div>
        </div>
    </div>
    </>;

}















export default skills;