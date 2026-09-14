import "./Contacts.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Contacts() {
  return (
    
    <section className="contact" id="contact">

      {/* CONTACT */}
      <div className="contact-container">
        
        <div className="contact-header">

          <p className="contact-label">CONTACT ME</p>

          <h1>
            Let's
            <br />
            <span>Connect.</span>
          </h1>

          <p className="contact-intro">
            I am currently looking for opportunities to start my career
            in software development. If you have an opportunity or would
            like to connect, feel free to reach out.
          </p>

        </div>


        <div className="contact-grid">

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/anjuanilkumar66"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>

            <div className="contact-info">
              <span>PROFESSIONAL</span>
              <h2>LinkedIn</h2>
              <p>Connect with me professionally</p>
            </div>

            <div className="contact-arrow">↗</div>
          </a>


          {/* GITHUB */}
          <a
            href="https://github.com/anjuanilkumar36"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <FontAwesomeIcon icon={faGithub} />
            </div>

            <div className="contact-info">
              <span>CODE & PROJECTS</span>
              <h2>GitHub</h2>
              <p>Explore my projects and code</p>
            </div>

            <div className="contact-arrow">↗</div>
          </a>


          {/* EMAIL */}
          <a
            href="mailto:anjuanilkumar36@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>

            <div className="contact-info">
              <span>EMAIL</span>
              <h2>Email</h2>
              <p>anjuanilkumar36@gmail.com</p>
            </div>

            <div className="contact-arrow">↗</div>
          </a>


          {/* PHONE */}
          <a
            href="tel:+919526721534"
            className="contact-card"
          >
            <div className="contact-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>

            <div className="contact-info">
              <span>PHONE</span>
              <h2>Phone</h2>
              <p>+91 9526721534</p>
            </div>

            <div className="contact-arrow">↗</div>
          </a>

        </div>


        <div className="contact-footer">
          <span>OPEN TO SOFTWARE DEVELOPMENT OPPORTUNITIES</span>
          <span>© 2026 ANJU ANILKUMAR</span>
        </div>

      </div>

    </section>
  );
}

export default Contacts;
