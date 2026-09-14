import "./Home.css";


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

          <p className="role">
            Python Developer | Django | FastAPI | MySQL | React
          </p>

          <p className="description">
            B.Tech Computer Science and Engineering graduate with who
            turning ideas into practical software solutions using Python and modern web technologies.
          </p>

          <div className="home-buttons">

            <a href="#projects" className="primary-btn">
              See My Projects
            </a>

            <a href="/ANJU_ANILKUMAR_RESUME.pdf" className="primary-btn">
              Resume
            </a>

            <a href="#contact" className="primary-btn">
              Contact Me
            </a>

            

          </div>

          <div className="social-links">

            <a href="mailto:anjuanilkumar36@gmail.com">
              ✉
            </a>

            <a
              href="https://github.com/anjuanilkumar36"
              target="_blank"
              rel="noreferrer"
            >
              GH
            </a>

            <a
              href="https://linkedin.com/in/anjuanilkumar"
              target="_blank"
              rel="noreferrer"
            >
              in
            </a>

            <a href="tel:+91 9526721534">
              ☎
            </a>

          </div>

        </div>


        {/* Profile Image */}

        <div className="home-image-wrapper">

          <div className="image-corner top-left"></div>

          <div className="image-corner bottom-right"></div>

          <div className="image-box">

            <img
              src="/anjuphoto.png"
              alt="Anju Anilkumar"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;
