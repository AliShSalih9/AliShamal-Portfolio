import { useState } from "react";
import ProjectCard, { type Project } from "./project-card";
import "./projects.css";

function projects() {
  const projects: Project[] = [
  {
  id: 9,
  title: "Noor AlBasra System",
description: `Complete car dealership management system for managing vehicles, customers, and sales. Features an organized dashboard for easy dealership management.
Private system — screenshots available in the project preview.`,
  image: "https://plain-eeur-prod-public.komododecks.com/202609/29/j7PuE6HUG5tjbpox1F4x/image.jpg",
  technologies: [
    "html",
    "css",
    "javascript",
    "jquery",
      "Google Sheets",
    "Google Apps Script",
   ],
  live: "https://drive.google.com/drive/folders/1e5AAdnaugmE4WcOC4QUW6XuI9VT0Dl-n?usp=drive_link"
},
   
    {
      id: 8,
      title: "Best Vision App",
      description:
        "Flutter app using TensorFlow Lite to detect animals from camera or gallery images. It processes only the area inside a green box by cropping the image before prediction. Supports 10 animals: squirrel, spider, sheep, cow, cat, chicken, butterfly, elephant, horse, and dog. Built with camera, image, and GetX.",
      image: "https://plain-eeur-prod-public.komododecks.com/202609/28/21FIMpjgBn1RRbEoQCRp/image.jpg",
      technologies: [
        "Flutter",
        "TensorFlow Lite",
        "Camera",
        "Image Processing",
        "GetX",
      ],
      github: "https://github.com/AliShSalih9/Best-Vision",
    },
    {
      id: 1,
      title: "Weather App",
      description:
        "A Flutter weather application that fetches real-time weather data using OpenWeather API and displays temperature, location, and conditions.",
      image: "https://plain-eeur-prod-public.komododecks.com/202609/28/pPDfdp3mUd8J2lAEksYp/image.jpg",
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
        "https://plain-eeur-prod-public.komododecks.com/202609/28/6MycFNtbgXymssd8UdmT/image.jpg",
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
        "https://plain-eeur-prod-public.komododecks.com/202609/28/ATuXLYWqXSdA2UsSO5o5/image.jpg",
      technologies: ["C#", "SQL Server", "DevExpress"],
      live: "",
      github: "https://github.com/yourusername/pos-sales",
    },

    {
      id: 4,
      title: "School Performance For Student",
      description:
        "School performance reflects a student’s academic achievement and learning progress.It includes grades, attendance, and participation in school activities.Overall, it shows the student’s engagement, discipline, and understanding.",
      image: "https://plain-eeur-prod-public.komododecks.com/202609/28/CPVOcxUrnWVpUaYpA8Ij/image.jpg",
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
        "https://plain-eeur-prod-public.komododecks.com/202609/28/uchG6A35uUqfBL49JYA6/image.jpg",
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
        "https://plain-eeur-prod-public.komododecks.com/202609/28/2uKV8ke7MmyypsyLwHql/image.jpg",
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
        "https://plain-eeur-prod-public.komododecks.com/202609/28/uXnUhyIzWR1rKHXAM5wn/image.jpg",
      technologies: ["Node.js", "Express", "MongoDB", "REST API"],
      live: "",
      github: "https://github.com/AliShSalih9/task-manager-node-mongo",
    },
  ];
  type Skill = {
    name: string;
    description: string;
    logo: string;
    color: string;
  };

  const skills: Skill[] = [
    {
      name: "All",
      description: "All projects",
      logo: "https://cdn-icons-png.flaticon.com/512/5359/5359924.png",
      color: "#02569B",
    },
    {
      name: "Flutter",
      description: "Framework for cross-platform mobile apps.",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/flutter.svg",
      color: "#02569B",
    },
    {
      name: "Firebase",
      description:
        "Backend platform with authentication, database, and hosting.",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/firebase.svg",
      color: "#FFCA28",
    },
    {
      name: "PHP",
      description: "Server-side scripting language for web applications.",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/php.svg",
      color: "#777BB4",
    },
    {
      name: "Laravel",
      description: "PHP framework for secure and scalable web applications.",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/laravel.svg",
      color: "#FF2D20",
    },
    {
      name: "JavaScript",
      description: "Language for dynamic and interactive web apps.",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/javascript.svg",
      color: "#F7DF1E",
    },
    {
      name: "React",
      description: "Library for building fast and reusable UI components.",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/react.svg",
      color: "#61DAFB",
    },
    {
      name: "Node.js",
      description: "JavaScript runtime for backend development.",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/nodedotjs.svg",
      color: "#339933",
    },
    {
      name: "C#",
      description: "C# programming language.",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/csharp.svg",
      color: "#239120",
    },
    {
      name: "Windows Forms",
      description: "Desktop application framework for Windows.",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/windows.svg",
      color: "#239120",
    },
    {
      name: "SQL Server",
      description: "Database design, queries, and management.",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/microsoftsqlserver.svg",
      color: "#4479A1",
    },
    {
      name: "MySQL",
      description: "Relational database system.",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/mysql.svg",
      color: "#4479A1",
    },
    {
      name: "MongoDB",
      description: "NoSQL database for scalable data storage.",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/mongodb.svg",
      color: "#47A248",
    },
  ];
  const [activeSkill, setActiveSkill] = useState("All");

  const filteredProjects =
    activeSkill === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(activeSkill),
        );

  return (
    <>
      <div className="projects-container" id="projects">
        <h2>Projects</h2>
        <p>
          A showcase of the applications and systems I’ve built, focusing on
          performance, usability, and clean design. Each project highlights my
          skills in turning ideas into real, working solutions.
        </p>

        <div className="skill-buttons">
          {skills.map((skill) => (
            <button
              key={skill.name}
              className="skill-button"
              onClick={() => setActiveSkill(skill.name)}
            >
              <img width={25} src={skill.logo} />
              {skill.name}
            </button>
          ))}
        </div>
        <div className="project-cards">
          <ProjectCard projects={filteredProjects} />
        </div>
      </div>
    </>
  );
}

export default projects;
