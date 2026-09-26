import { useEffect, useRef } from "react";
import "./Projects.css";
import AnimatedBackground from "./AnimatedBackground";

const projects = [
  {
    number: "",
    title: "AI-Based Cybercrime Prevention",
    description:
      "A web application designed to detect and help prevent harmful activities on social media using AI-based content analysis.",

    technologies: [
      "Python",
      "Django",
      "MySQL",
      "REST APIs",
    ],

    image: "CybercrimeP.jpeg",

    github:
      "https://github.com/anjuanilkumar36/cybercrime-prevention",
  },

  {
    number: "",
    title: "ShopEase",
    description:
      "A full-stack e-commerce web application with authentication, product management, shopping cart, order management, and an admin dashboard.",

    technologies: [
      "React.js",
      "FastAPI",
      "Python",
      "JWT",
    ],

    image: "ShopEase.jpeg",

    github:
      "https://github.com/anjuanilkumar36/shopease---Ecommerce",
  },

  {
    number: "",
    title: "GLB Model Viewer",
    description:
      "A web-based 3D model viewer that allows users to load and interact with GLB models through a modern React interface.",

    technologies: [
      "React",
      "JavaScript",
      "Three.js",
      "Supabase",
    ],

    image: "GLB.jpeg",

    github:
      "https://github.com/anjuanilkumar36/glb-model-viewer",
  },
];


function Projects() {

  const projectRefs = useRef([]);


  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "project-visible"
            );

          }

        });

      },
      {
        threshold: 0.18,
      }
    );


    projectRefs.current.forEach((project) => {

      if (project) {
        observer.observe(project);
      }

    });


    return () => {

      projectRefs.current.forEach((project) => {

        if (project) {
          observer.unobserve(project);
        }

      });

    };

  }, []);


  return (

    <section
      className="projects-section"
      id="projects"
    >

      {/* Animated red dots */}

      <AnimatedBackground />


      {/* Main projects frame */}

      <div className="projects-frame">


        {/* =========================
            SECTION HEADING
        ========================== */}

        <div className="projects-heading">

          <span className="projects-number">
            
          </span>

          <div>

            

            <h2>PROJECTS</h2>

          </div>

        </div>


        {/* =========================
            PROJECT LIST
        ========================== */}

        <div className="projects-list">

          {projects.map((project, index) => (

            <article
              key={project.number}

              ref={(element) => {
                projectRefs.current[index] =
                  element;
              }}

              className={`project-card ${
                index % 2 === 0
                  ? "project-from-left"
                  : "project-from-right"
              }`}
            >


              {/* =====================
                  PROJECT IMAGE
              ====================== */}

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <span className="project-index">
                  {project.number}
                </span>

              </div>


              {/* =====================
                  PROJECT INFORMATION
              ====================== */}

              <div className="project-info">

                <h3>
                  {project.title}
                </h3>


                <p className="project-description">
                  {project.description}
                </p>


                {/* Technologies */}

                <div className="project-technologies">

                  {project.technologies.map(
                    (technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    )
                  )}

                </div>


                {/* GitHub */}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >

                  VIEW ON GITHUB

                  <span>↗</span>

                </a>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Projects;