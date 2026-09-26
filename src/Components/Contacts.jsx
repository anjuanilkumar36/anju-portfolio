import "./Contacts.css";
import AnimatedBackground from "./AnimatedBackground";

import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

import { useEffect, useRef, useState } from "react";

function Contacts() {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSending(true);
    setStatus("");

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/xqpadjol",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setIsSending(false);
  };

  return (
    <section
      className={`contact-section ${
        isVisible ? "contact-visible" : ""
      }`}
      id="contact"
      ref={contactRef}
    >
       {/* Animated red dots */}

      <AnimatedBackground />
      
      <div className="contact-container">

        {/* TITLE */}

        <div className="contact-title">
          <span className="contact-line"></span>

          <h2>Contact Me</h2>

          <span className="contact-line"></span>
        </div>


        {/* MAIN CONTACT BOX */}

        <div className="contact-box">

          {/* LEFT SIDE */}

          <div className="contact-info">

            <span className="contact-label">
              GET IN TOUCH
            </span>

            <h3>
              Let's work
              <span> together.</span>
            </h3>

            <p>
              Have a project, opportunity, or just want to
              connect? Feel free to send me a message.
            </p>


            <div className="contact-details">

              {/* EMAIL */}

              <a
                href="mailto:anjuanilkumar36@gmail.com"
                className="contact-detail"
              >
                <div className="contact-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <span>Email</span>

                  <strong>
                    anjuanilkumar36@gmail.com
                  </strong>
                </div>
              </a>


              {/* PHONE */}

              <a
                href="tel:+919526721534"
                className="contact-detail"
              >
                <div className="contact-icon">
                  <FaPhone />
                </div>

                <div>
                  <span>Phone</span>

                  <strong>
                    +91 9526721534
                  </strong>
                </div>
              </a>


              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/anjuanilkumar66/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail"
              >
                <div className="contact-icon">
                  <FaLinkedin />
                </div>

                <div>
                  <span>LinkedIn</span>

                  <strong>
                    linkedin.com/in/anjuanilkumar66
                  </strong>
                </div>
              </a>

            </div>
          </div>


          {/* FORM */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this about?"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                rows="6"
                required
              ></textarea>

            </div>


            {/* STATUS */}

            {status === "success" && (
              <div className="form-status success">
                ✓ Message sent successfully!
              </div>
            )}

            {status === "error" && (
              <div className="form-status error">
                ✕ Something went wrong. Please try again.
              </div>
            )}


            {/* BUTTON */}

            <button
              type="submit"
              className="contact-submit"
              disabled={isSending}
            >
              <span>
                {isSending
                  ? "Sending..."
                  : "Send Message"}
              </span>

              {!isSending && <FaPaperPlane />}
            </button>

          </form>

          

        </div>

      <div className="contact-bottom">
        <div className="contact-bottom-line"></div>

          <span className="contact-copyright">
           © 2026 ANJU ANILKUMAR. All rights reserved.
          </span>
      </div>

      </div>
    </section>
  );
}

export default Contacts;