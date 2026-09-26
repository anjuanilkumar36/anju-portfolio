import "./Skills.css";

import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiReact,
  SiMysql,
  SiHtml5,
  SiJavascript,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

import {
  FaCss3Alt,
  FaDatabase,
  FaCode,
  FaProjectDiagram,
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

import { useEffect, useRef, useState } from "react";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    {
      name: "Python",
      icon: <SiPython />,
      color: "#3776AB",
    },
    {
      name: "Django",
      icon: <SiDjango />,
      color: "#44B78B",
    },
    {
      name: "FastAPI",
      icon: <SiFastapi />,
      color: "#009688",
    },
    {
      name: "React",
      icon: <SiReact />,
      color: "#61DAFB",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "#4479A1",
    },
    {
      name: "SQL",
      icon: <FaDatabase />,
      color: "#F29111",
    },
    {
      name: "HTML",
      icon: <SiHtml5 />,
      color: "#E34F26",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      color: "#1572B6",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "#F7DF1E",
    },
    {
      name: "Git",
      icon: <SiGit />,
      color: "#F05032",
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
      color: "#FFFFFF",
    },
    {
      name: "VS Code",
      icon: <VscVscode />,
      color: "#007ACC",
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      color: "#FF6C37",
    },
    {
      name: "OOP",
      icon: <FaCode />,
      color: "#C084FC",
    },
    {
      name: "Data Structures",
      icon: <FaProjectDiagram />,
      color: "#22C55E",
    },
    {
      name: "REST APIs",
      icon: <FaDatabase />,
      color: "#F59E0B",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section
    
      className={`skills-section ${isVisible ? "skills-visible" : ""}`}
      
      id="skills"
      
      ref={skillsRef}
      
    >
      <div className="skills-container">
        

        {/* TITLE */}

        <div className="skills-title">
          <span className="skills-title-line"></span>

          <h2>Skills</h2>

          <span className="skills-title-line"></span>
        </div>

        {/* SKILLS BOX */}

        <div className="skills-box">

          <div className="skills-list">
            {skills.map((skill, index) => (
              <div
                className={`skill-item skill-${index + 1}`}
                key={skill.name}
              >
                <div
                  className="skill-icon"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                <span className="skill-name">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;