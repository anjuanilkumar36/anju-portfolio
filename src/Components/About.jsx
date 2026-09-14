import "./About.css";


function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-content">

          <p className="about-label">ABOUT ME</p>

          <h1>
            Computer Science
            <br />
            <span>Engineer</span>
          </h1>

          <p className="about-intro">
            B.Tech Computer Science and Engineering graduate with hands-on
            experience in developing Python-based projects and web
            applications.
          </p>

          <p className="about-description">
            I am eager to begin my career in software development and
            contribute to building practical and reliable applications.
            I have developed projects using Python and modern web
            technologies, gaining practical experience in backend
            development, APIs, databases, and frontend technologies.
          </p>

          {/* TECH STACK */}
          <div className="about-skills">

            <div className="skills-title">
              <span></span>
              TECH STACK
            </div>

            <div className="skills-list">
              <span>Python</span>
              <span>Django</span>
              <span>FastAPI</span>
              <span>MySQL</span>
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>

          </div>

          {/* PROJECT HIGHLIGHTS */}
          <div className="project-highlights">
            <a href="#projects" className="highlight-card">
    <strong>01</strong>
    <p>AI based Cybercrime prevention </p>
    <small>Final Year Project ↗</small>
  </a>
  <a href="#projects"  className="highlight-card">
    
    

    <strong>02</strong>
    <p>GLB Model Viewer</p>
    <small>3D Model viewer ↗</small>
  </a>

  

</div>

          {/* LINKS */}
          <div className="about-links">

            <a
              href="https://github.com/anjuanilkumar36"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/anjuanilkumar66"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:anjuanilkumar36@gmail.com">
              Email ↗
            </a>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="about-visual">

          <div className="visual-number"></div>

          <div className="about-image">

            

            <img
              src="/csphoto.png"
              alt="Anju Anilkumar"
            />

          </div>

          

        </div>

      </div>
    </section>
  );
}

export default About;
