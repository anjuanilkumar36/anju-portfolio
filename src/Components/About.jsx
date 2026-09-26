import "./About.css";

import {
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import { useEffect, useRef, useState } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`about-section ${isVisible ? "about-visible" : ""}`}
      id="about"
      ref={aboutRef}
    >
      <div className="about-container">

        {/* TITLE */}
        <div className="about-title">
          <span className="about-title-line"></span>
          <h2>About Me</h2>
          <span className="about-title-line"></span>
        </div>

        <div className="about-layout">

          {/* RIGHT SIDE - BUTTONS ON DESKTOP */}
          <div className="about-actions">

            <a
              href="https://www.linkedin.com/in/anjuanilkumar66/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-action linkedin-action"
            >
              <div className="action-icon">
                <FaLinkedin />
              </div>

              <div className="action-text">
                <span>CONNECT</span>
                <strong>LinkedIn</strong>
              </div>

              <FaArrowRight className="action-arrow" />
            </a>

            <a
              href="https://github.com/anjuanilkumar36"
              target="_blank"
              rel="noopener noreferrer"
              className="about-action github-action"
            >
              <div className="action-icon">
                <FaGithub />
              </div>

              <div className="action-text">
                <span>EXPLORE</span>
                <strong>GitHub</strong>
              </div>

              <FaArrowRight className="action-arrow" />
            </a>

            <a
              href="ANJU_ANILKUMAR_RESUME.pdf"
              download
              className="about-action resume-action"
            >
              <div className="action-icon">
                <FaDownload />
              </div>

              <div className="action-text">
                <span>DOWNLOAD</span>
                <strong>Resume</strong>
              </div>

              <FaArrowRight className="action-arrow" />
            </a>

          </div>

          {/* LEFT SIDE - ABOUT TEXT */}
          <div className="about-content">

            <div className="about-label">
              
              <span>WHO I AM</span>
            </div>

            <div className="about-text-box">

              <p>
                I’m a B.Tech Computer Science and Engineering graduate with a
                strong passion for programming and problem-solving. I enjoy
                turning ideas into practical applications and have hands-on
                experience building web projects using technologies such as
                Python, Django, FastAPI, React, and SQL.
              </p>

              <p>
                I’m someone who enjoys learning by building, experimenting
                with new ideas, and understanding how things work behind the
                scenes. I like challenging myself with new problems and
                continuously improving my technical skills through projects
                and practice.
              </p>

              <p>
                As I begin my career in software development, I’m looking
                forward to working on real-world challenges, learning from
                experienced teams, and creating solutions that are simple,
                useful, and reliable.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;