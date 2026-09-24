import "./Contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Contacts() {
  return (
    <section className="contact" id="contact">

    

      

     <div className="contact-footer">
          
          <span>© 2026 ANJU ANILKUMAR</span>
     </div>

      <div className="contact-container">

        <p className="contact-label">GET IN TOUCH</p>

        <h1>Contact Me</h1>

        <p className="contact-message">
          Feel free to reach out:
          <a href="mailto:anjuanilkumar36@gmail.com">
            anjuanilkumar36@gmail.com
          </a>
        </p>

        <div className="contact-icons">
          <a
            href="mailto:anjuanilkumar36@gmail.com"
            className="contact-icon"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>

          <a
            href="https://www.linkedin.com/in/anjuanilkumar66"
            target="_blank"
            rel="noreferrer"
            className="contact-icon"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>

           

          

          

         
        </div>

         

      </div>
      
    </section>
    
  );
}

export default Contacts;