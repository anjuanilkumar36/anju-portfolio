import "./TechStack.css";

function TechStack() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        {/* Heading */}
        <div className="skills-heading">
          
          <h1>Skills</h1>
        </div>


        {/* Skills Grid */}
        <div className="skills-grid">

          {/* Frontend */}
          <div className="skill-box frontend-box">
            <span className="skill-number"></span>

            <h2>Frontend Development</h2>

            <div className="skill-items">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </div>


          {/* Backend */}
          <div className="skill-box backend-box">
            <span className="skill-number"></span>

            <h2>Backend Development</h2>

            <div className="skill-items">
              <span>Python</span>
              <span>Django</span>
              <span>FastAPI</span>
            </div>
          </div>


          {/* Database */}
          <div className="skill-box database-box">
            <span className="skill-number"></span>

            <h2>Database</h2>

            <div className="skill-items">
              <span>SQL</span>
              <span>MySQL</span>
            </div>
          </div>


          {/* Programming & Concepts */}
          <div className="skill-box concepts-box">
            <span className="skill-number"></span>

            <h2>Programming & Concepts</h2>

            <div className="skill-items">
              <span>Python</span>
              <span>JavaScrip</span>
              <span>Data Structures</span>
              <span>OOP</span>
              <span>REST APIs</span>
            </div>
          </div>


          {/* Version Control & Tools */}
          <div className="skill-box tools-box">
            <span className="skill-number"></span>

            <h2>Version Control & Tools</h2>

            <div className="skill-items">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Postman</span>
            </div>
          </div>


          {/* Soft Skills */}
          <div className="skill-box soft-box">
            <span className="skill-number"></span>

            <h2>Soft Skills</h2>

            <div className="skill-items">
              <span>Problem Solving</span>
              <span>Logical Thinking</span>
              <span>Time Management</span>
              <span>Leadership</span>
              <span>Team Management</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default TechStack;