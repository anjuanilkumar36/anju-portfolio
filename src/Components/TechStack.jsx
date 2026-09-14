import "./TechStack.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPython,
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";

import {
  faDatabase,
  faServer,
  faPuzzlePiece,
  faClock,
  faUsers,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";


function TechStack() {
  return (
    <section className="tech-stack" id="skills">

      <div className="tech-container">

        {/* ================= HEADER ================= */}

        <div className="tech-header">

          <p className="tech-label">
            TECH STACK
          </p>

          <h1>
            Skills &
            <br />
            <span>Expertise</span>
          </h1>

          <p className="tech-intro">
            Technologies and professional skills I use to build
            practical software applications and work effectively
            in development teams.
          </p>

        </div>


        {/* ================= TECHNICAL SKILLS ================= */}

        <div className="skills-section-title">
          <span>01</span>
          <h2>Technical Skills</h2>
        </div>


        {/* ================= BACKEND ================= */}

        <div className="tech-category">

          <div className="category-title">
            <span>01</span>
            <h2>Backend</h2>
          </div>


          <div className="tech-grid">

            {/* PYTHON */}

            <a
              href="/certificates/python-certificate.jpg"
              target="_blank"
              rel="noreferrer"
              className="tech-card"
            >

              <div className="tech-number">
                
              </div>

              <div className="tech-icon python-icon">
  <FontAwesomeIcon icon={faPython} />
</div>

              <div className="tech-info">
                <h3>Python</h3>
                <p>Programming Language</p>
              </div>

              <div className="tech-arrow">
                ↗
              </div>

              <div className="tech-preview">
                <img
                  src="/certificates/python-certificate.jpg"
                  alt="Python Certificate"
                />
              </div>

            </a>


            {/* DJANGO */}

            <a
              href="#projects"
              className="tech-card"
            >

              <div className="tech-number">
                
              </div>

              <div className="tech-icon django-icon">
  <FontAwesomeIcon icon={faServer} />
</div>

              <div className="tech-info">
                <h3>Django</h3>
                <p>Full-stack web framework</p>
              </div>

              <div className="tech-arrow">
                ↗
              </div>

            </a>


            {/* FASTAPI */}

            <a
              href="#projects"
              className="tech-card"
            >

              <div className="tech-number">
                
              </div>

              <div className="tech-icon fastapi-icon">
  <FontAwesomeIcon icon={faServer} />
</div>

             <div className="tech-info">
                <h3>FastAPI</h3>
                <p>API framework</p>
              </div>

              <div className="tech-arrow">
                ↗
              </div>

            </a>

          </div>

        </div>


        {/* ================= DATABASE ================= */}

        <div className="tech-category">

          <div className="category-title">
            <span>02</span>
            <h2>Database</h2>
          </div>


          <div className="tech-grid">

            {/* SQL */}

            <a
              
              target="_blank"
              rel="noreferrer"
              className="tech-card"
            >

              <div className="tech-number">
                
              </div>

              <div className="tech-icon sql-icon">
  <FontAwesomeIcon icon={faDatabase} />
</div>

              <div className="tech-info">
                <h3>SQL</h3>
                <p>Database Query Language</p>
              </div>

              <div className="tech-arrow">
                ↗
              </div>

              <div className="tech-preview">
                
              </div>

            </a>


            {/* MYSQL */}

            <div className="tech-card">

              <div className="tech-number">
                
              </div>

              <div className="tech-icon mysql-icon">
  <FontAwesomeIcon icon={faDatabase} />
</div>

              <div className="tech-info">
                <h3>MySQL</h3>
                <p>Relational Database</p>
              </div>

              <div className="tech-arrow">
                ↗
              </div>

            </div>

          </div>

        </div>


        {/* ================= FRONTEND ================= */}

        <div className="tech-category">

          <div className="category-title">
            <span>03</span>
            <h2>Frontend</h2>
          </div>


          <div className="tech-grid frontend-grid">

            {/* REACT */}

            <div className="tech-card">

              <div className="tech-number">
                
              </div>

              <div className="tech-icon react-icon">
  <FontAwesomeIcon icon={faReact} />
</div>
              <div className="tech-info">
                <h3>React</h3>
                <p>Frontend Library</p>
              </div>

              <div className="tech-arrow">
                ↗
              </div>

            </div>


            {/* HTML */}

            <div className="tech-card">

              <div className="tech-number">
                
              </div>

              <div className="tech-icon html-icon">
  <FontAwesomeIcon icon={faHtml5} />
</div>

              <div className="tech-info">
                <h3>HTML</h3>
                <p>Web Structure</p>
              </div>

              <div className="tech-arrow">
                ↗
              </div>

            </div>


            {/* CSS */}

            <div className="tech-card">

              <div className="tech-number">
                
              </div>

             <div className="tech-icon css-icon">
  <FontAwesomeIcon icon={faCss3Alt} />
</div>

              <div className="tech-info">
                <h3>CSS</h3>
                <p>Web Styling</p>
              </div>

              <div className="tech-arrow">
                ↗
              </div>

            </div>


            {/* JAVASCRIPT */}

            <div className="tech-card">

              <div className="tech-number">
                
              </div>

              <div className="tech-icon javascript-icon">
  <FontAwesomeIcon icon={faJs} />
</div>

              <div className="tech-info">
                <h3>JavaScript</h3>
                <p>Web Programming</p>
              </div>

              <div className="tech-arrow">
                ↗
              </div>

            </div>

          </div>

        </div>


        {/* ================= SOFT SKILLS ================= */}

        <div className="soft-skills-section">

          <div className="skills-section-title">

            <span>02</span>

            <h2>Soft Skills</h2>

          </div>


          <div className="soft-skills-grid">

            {/* PROBLEM SOLVING */}

            <div className="soft-skill-card">

              <div className="soft-skill-icon">
                <FontAwesomeIcon icon={faPuzzlePiece} />
              </div>

              <div>
                <span></span>
                <h3>Problem Solving</h3>
                <p>
                  Analyzing problems and finding practical solutions.
                </p>
              </div>

            </div>


            {/* TIME MANAGEMENT */}

            <div className="soft-skill-card">

              <div className="soft-skill-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>

              <div>
                <span></span>
                <h3>Time Management</h3>
                <p>
                  Organizing tasks and managing priorities effectively.
                </p>
              </div>

            </div>


            {/* LEADERSHIP */}

            <div className="soft-skill-card">

              <div className="soft-skill-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>

              <div>
                <span></span>
                <h3>Leadership</h3>
                <p>
                  Taking responsibility and contributing effectively
                  within a team.
                </p>
              </div>

            </div>


            {/* COMMUNICATION */}

            <div className="soft-skill-card">

              <div className="soft-skill-icon">
                <FontAwesomeIcon icon={faMicrophone} />
              </div>

              <div>
                <span></span>
                <h3>Communication</h3>
                <p>
                  Sharing ideas clearly and collaborating with others.
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* ================= FOOTER ================= */}

        <div className="tech-footer">

          <span>PYTHON</span>
          <span>BACKEND</span>
          <span>FRONTEND</span>
          <span>DATABASE</span>
          

        </div>

      </div>

    </section>
  );
}

export default TechStack;