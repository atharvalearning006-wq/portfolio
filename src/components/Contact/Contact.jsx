import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        <p className="contact-title">
          Contact
        </p>

        <h2>
          Let's Connect
        </h2>
        

        <p className="contact-subtitle">
          I'm always open to discussing opportunities, projects and collaborations.
        </p>

        <div className="contact-info">

          <div className="contact-card">

            <MdEmail className="contact-icon" />

            <div>
              <h3>Email</h3>
              <p>youremail@gmail.com</p>
            </div>

          </div>

          <div className="contact-card">

            <FaPhoneAlt className="contact-icon" />

            <div>
              <h3>Phone</h3>
              <p>+91 9876543210</p>
            </div>

          </div>

          <div className="contact-card">

            <FaLinkedin className="contact-icon" />

            <div>
              <h3>LinkedIn</h3>
              <p>atharvamhatre</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;