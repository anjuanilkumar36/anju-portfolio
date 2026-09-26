import "./Home.css";
import AnimatedBackground from "./AnimatedBackground";

function Home() {
  return (
    <section className="home" id="home">

      <AnimatedBackground />

      <div className="home-box">

        {/* =========================
            LEFT CONTENT
        ========================== */}

        <div className="home-left">

          <p className="home-intro">HI, I'M</p>

          {/* ANJU LETTER ANIMATION */}
          <h1 className="home-name">
            <span>A</span>
            <span>N</span>
            <span>J</span>
            <span>U</span>
          </h1>

          <p className="home-description">
            I develop web applications using modern technologies,
            solving problems and turning ideas into practical solutions.
          </p>

          {/* LINKS */}

          <div className="home-links">

            <a href="#projects">
              View My Projects
            </a>

            <a href="#contact">
              Contact Me
            </a>

            <a
              href="https://www.linkedin.com/in/anjuanilkumar66"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>


        {/* =========================
            PHOTO + DEVELOPER LABEL
        ========================== */}

        <div className="home-visual">

          <div className="photo-wrapper">

            {/* ROUND PHOTO */}

            <div className="photo-circle">
              <img
                src="/anjuphoto.jpeg"
                alt="Anju"
              />
            </div>

            {/* PYTHON DEVELOPER ATTACHED TO PHOTO */}

            <div className="developer-label">
              <span>Software Developer</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;