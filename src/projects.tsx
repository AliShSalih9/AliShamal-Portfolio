import './projects.css'
import ProjectCard from './project-card';
import { useState } from 'react';

function projects()
{
   const projects = [
  {
    id: 1,
    title: "Weather App",
    description:
      "A Flutter weather application that fetches real-time weather data using OpenWeather API and displays temperature, location, and conditions.",
    image:
      "https://cdn-icons-png.flaticon.com/512/3845/3845731.png",
    technologies: ["Flutter", "REST API", "OpenWeather"],
    live: "https://www.linkedin.com/posts/ali-shamal-895516288_flutter-dart-weatherapp-activity-7317223711302987776-Zusr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXX-nEBVwE-aMRN4-_myNJwKVK4MR5ulik",
    github: "https://github.com/AliShSalih9/Weather_Application",
  },

  {
    id: 2,
    title: "Attendance Student For PCI",
    description:
      "A web-based feedback system that allows students to submit feedback anonymously and administrators to generate reports.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgSgOD9gobJxqCwwtAqVYzYBMpkgROZmrAA&s",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    live: "https://pci-akre.com/",
    github: "",
  },

  {
    id: 3,
    title: "POS Sales System",
    description:
      "A Windows Forms Point of Sale system with barcode scanning, multi-language support, debt management, and receipt printing.",
    image:
      "https://cdn-icons-png.freepik.com/256/6140/6140106.png?semt=ais_white_label",
    technologies: ["C#", "SQL Server", "DevExpress"],
    live: "",
    github: "https://github.com/yourusername/pos-sales",
  },

  {
    id: 4,
    title: "School Performance For Student",
    description:
      "School performance reflects a student’s academic achievement and learning progress.It includes grades, attendance, and participation in school activities.Overall, it shows the student’s engagement, discipline, and understanding.",
    image:
      "https://educloud.app/lms/src/performance-analytics/hero.png",
    technologies: ["PHP", "AJAX", "DataTables", "MySQL"],
    live: "https://briyan.pci-akre.com/osrs/teacher_login.php",
    github: "",
  },

 {
  id: 5,
  title: "Camera WindowsForm C#",
  description:
    "A Windows Forms application built with C# for camera access and image capture. It supports live preview, photo capturing, and saving images locally.",
  image:
    "https://d585tldpucybw.cloudfront.net/sfimages/default-source/10x/telerik-ui-for-winforms-ninja.png?sfvrsn=b1798554_1",
  technologies: ["C#", "Windows Forms", "AForge"],
  live: "",
  github: "https://github.com/yourusername/camera-windowsform-csharp",
},
{
  id: 6,
  title: "Device eCommerce App",
  description:
    "A Flutter-based eCommerce application for selling electronic devices. It uses APIs for data fetching and local storage to manage cart and user data offline.",
  image:
    "https://buildfire.com/wp-content/uploads/2024/09/Ecommerce-mobile-app-scaled-3.png",
  technologies: ["Flutter", "REST API", "Local Storage"],
  live: "",
  github: "https://github.com/AliShSalih9/device-ecommerce",
},
{
  id: 7,
  title: "Task Manager System",
  description:
    "A web-based task management system built with Node.js and MongoDB. It supports task creation, updates, deletion, and user authentication through RESTful APIs.",
  image:
    "https://cdn-icons-png.freepik.com/256/3286/3286920.png?semt=ais_white_label",
  technologies: ["Node.js", "Express", "MongoDB", "REST API"],
  live: "",
  github: "https://github.com/AliShSalih9/task-manager-node-mongo",
}

];
   type Skill = {
  name: string;
  description: string;
  logo: string;
  color: string;
};


  const skills: Skill[] = [
  { name: "All", description: "All projects", logo: "https://cdn-icons-png.flaticon.com/512/5359/5359924.png", color: "#02569B" },
  { name: "Flutter", description: "Framework for cross-platform mobile apps.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/flutter.svg", color: "#02569B" },
  { name: "Firebase", description: "Backend platform with authentication, database, and hosting.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/firebase.svg", color: "#FFCA28" },
  { name: "PHP", description: "Server-side scripting language for web applications.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/php.svg", color: "#777BB4" },
  { name: "Laravel", description: "PHP framework for secure and scalable web applications.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/laravel.svg", color: "#FF2D20" },
  { name: "JavaScript", description: "Language for dynamic and interactive web apps.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/javascript.svg", color: "#F7DF1E" },
  { name: "React", description: "Library for building fast and reusable UI components.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/react.svg", color: "#61DAFB" },
  { name: "Node.js", description: "JavaScript runtime for backend development.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/nodedotjs.svg", color: "#339933" },
  { name: "C#", description: "C# programming language.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/csharp.svg", color: "#239120" },
  { name: "Windows Forms", description: "Desktop application framework for Windows.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/windows.svg", color: "#239120" },
  { name: "SQL Server", description: "Database design, queries, and management.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/microsoftsqlserver.svg", color: "#4479A1" },
  { name: "MySQL", description: "Relational database system.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/mysql.svg", color: "#4479A1" },
  { name: "MongoDB", description: "NoSQL database for scalable data storage.", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/mongodb.svg", color: "#47A248" }
];
 const [activeSkill, setActiveSkill] = useState("All");

  const filteredProjects =
    activeSkill === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(activeSkill)
        );

 
    return <>
    <div className="projects-container" id="projects">
<h2>Projects</h2>
<p>
    A showcase of the applications and systems I’ve built, focusing on performance, usability, and clean design. Each project highlights my skills in turning ideas into real, working solutions.
</p>



    <div className="skill-buttons">
 {skills.map(skill=><button key={skill.name} className='skill-button' onClick={()=>setActiveSkill(skill.name)}>


    <img width={25} src={skill.logo} />
    {skill.name}
 </button>)}
    </div>
    <div className="project-cards">
       
<ProjectCard projects={filteredProjects}/>
 
</div>
</div>
 
    </>
}


export default projects;