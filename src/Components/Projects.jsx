import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  const projects = [
    {
      title: "AI-Based Cybercrime Prevention System",
      technologies: "Python | Django | MySQL",
      description:
        "A web-based system developed to help identify and prevent cybercrime-related activities on social media using AI-based analysis.",
      type: "Team Project",
      github:
        "https://github.com/anjuanilkumar36/cybercrime-prevention",
    },
    {
      title: "ShopEase",
      technologies: "React | FastAPI | Python | SQL",
      description:
        "A full-stack e-commerce application with user authentication, product management and API-based communication.",
      type: "Individual Project",
      github: "https://github.com/anjuanilkumar36/shopease---Ecommerce",
    },
    {
      title: "GLB Model Viewer",
      technologies: "React | JavaScript | Supabase | Three.js",
      description:
        "An interactive web application for viewing and exploring 3D GLB models directly in the browser.",
      type: "Individual Project",
      github:
        "https://github.com/anjuanilkumar36/glb-model-viewer",
    },
    
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
         
          <h1>Projects</h1>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>

              <span className="project-number">
                0{index + 1}
              </span>

              <h2>{project.title}</h2>

              <p className="project-technologies">
                {project.technologies}
              </p>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-bottom">

                <span className="project-type">
                  {project.type}
                </span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-link"
                >
                  View on GitHub
                  <FontAwesomeIcon icon={faGithub} />
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