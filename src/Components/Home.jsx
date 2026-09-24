import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";



function Home() {

  const codeWords = [
    "Python",
    "Django",
    "FastAPI",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "MySQL",
    "Git",
    "GitHub",
    "Backend",
    "Frontend",
    "API",
    "REST API",
    "MVT",
    "OOP",
    "SQL",
    "Database",
    "Developer",
    "Software Engineer",
    "def function():",
    "import django",
    "class Developer:",
    "return True",
    "try:",
    "except:",
    "async",
    "await",
    "JSON",
    "HTTP",
    "CRUD",
    "Authentication",
    "JWT",
    "Debugging",
    "Programming",
    "Web Development",
    "Code",
    "Framework",
    "Component",
    "Router",
    "Axios",
    "ORM",
    "PostgreSQL",
    "VS Code",
    "npm",
    "Vite",
    "Terminal",
    "Deployment",
    "Problem Solving"
  ];

  return (
    <section className="home" id="home">

      {/* Animated background code */}

      <div className="code-background">

        {codeWords.map((word, index) => (
          <span
            key={index}
            className={`floating-code code-${index + 1}`}
          >
            {word}
          </span>
        ))}

      </div>


      {/* Main Content */}

      <div className="home-container">

        <div className="home-content">

          <p className="hello">
            HELLO, I'M
          </p>

          <h1>
            ANJU 
          </h1>

          <h2>
            ANILKUMAR
          </h2>

         <div className="skills-marquee">
  <div className="skills-track">
    <span>B.Tech Graduate</span>
    <span>Computer Science</span>
    <span>Developer</span>
    <span>Python</span>
    <span>Django</span>
    <span>FastAPI</span>
    <span>React</span>
    <span>SQL</span>
    <span>MySQL</span>
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>

    {/* Duplicate for continuous animation */}
    <span>B.Tech Graduate</span>
    <span>Computer Science</span>
    <span>Developer</span>
    <span>Python</span>
    <span>Django</span>
    <span>FastAPI</span>
    <span>React</span>
    <span>SQL</span>
    <span>MySQL</span>
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
  </div>
</div>

          

          <div className="home-buttons">

            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a href="/ANJU_ANILKUMAR_RESUME.pdf" className="primary-btn">
              Resume
            </a>

            <a href="#contact" className="primary-btn">
              Contact Me
            </a>

           

            <a
            href="https://www.linkedin.com/in/anjuanilkumar66"
            className="primary-btn"
            
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>

          <a
            href="https://github.com/anjuanilkumar36"
            className="primary-btn"
            
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

         
            

          </div>

           </div>

          <div className="social-links">

            

          </div>

       


        </div>




        {/* Profile Image */}

  <div className="home-image-wrapper">
  <div className="image-box">
    <img
      src="/anjuphoto.png"
      alt="Anju Anilkumar"
    />
  </div>
  </div>
        

      

    </section>
  );
}

export default Home;
