import "./Projects.css";

function Projects() {
  const projects = [

    {
      number: "01",
      title: "AI-Based Cybercrime Prevention System",
      description:
        "A web-based system developed to help identify and prevent cybercrime-related activities on social media using AI-based analysis and a structured backend system.",
      technologies: [
        "Python",
        "Django",
        "HTML",
        "CSS",
        "JavaScript",
        "MySQL",
      ],
      liveLink: "#",
      githubLink: "https://github.com/anjuanilkumar36/cybercrime-prevention",
    },

    {
      number: "02",
      title: "GLB Model Viewer",
      description:
        "An interactive web application for viewing and exploring 3D GLB models directly in the browser with a modern React-based interface.",
      technologies: [
        "React",
        "JavaScript",
        "Supabase",
        "Three.js",
        "HTML",
        "CSS",
      ],
      
      githubLink: "https://github.com/anjuanilkumar36/glb-model-viewer",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        {/* HEADER */}
        <div className="projects-header">

          {/* LEFT SIDE */}
          <div className="projects-heading">
            <p className="projects-label">PROJECTS</p>

            <h1>
              Projects
            </h1>
          </div>

          {/* RIGHT SIDE - PROJECT LIST */}
          <div className="project-directory">

            <div className="directory-title">
              <span>PROJECTS</span>
              
            </div>

            <div className="directory-list">

              {projects.map((project) => (
                <a
                  key={project.number}
                  href={`#project-${project.number}`}
                  className="directory-item"
                >
                  <span className="directory-number">
                    {project.number}
                  </span>

                  <span className="directory-name">
                    {project.title}
                  </span>

                  <span className="directory-arrow">
                    ↗
                  </span>
                </a>
              ))}

            </div>

          </div>
        </div>


        {/* PROJECT LIST */}
        <div className="projects-list">

          {projects.map((project) => (
            <article
              className="project-card"
              id={`project-${project.number}`}
              key={project.number}
            >

              {/* TOP */}
              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

              </div>


              {/* CONTENT */}
              <div className="project-main">

                <div className="project-title-area">

                  <h2>{project.title}</h2>

                  <div className="project-links">

                    

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>GITHUB</span>
                      <strong>↗</strong>
                    </a>

                  </div>

                </div>


                <div className="project-description">

                  <p>
                    {project.description}
                  </p>

                </div>

              </div>


              {/* TECHNOLOGIES */}
              <div className="project-bottom">

                <div className="technology-label">
                  TECHNOLOGIES
                </div>

                <div className="technology-list">

                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* FOOTER */}
        <div className="projects-footer">
          <span>
            BUILDING • LEARNING • DEVELOPING 📈
          </span>
        </div>

      </div>
    </section>
  );
}

export default Projects;