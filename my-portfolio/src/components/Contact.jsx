import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <div className="section-heading text-center">
          <p>GET IN TOUCH</p>
          <h2>
            Let's Work <span>Together</span>
          </h2>
        </div>

        <div className="row g-5">

          <div className="col-lg-5">

            <h3 className="contact-title">
              Have a project in mind?
            </h3>

            <p className="contact-description">
              I'm always interested in learning, building new
              projects and exploring opportunities in web development.
            </p>

            <div className="contact-info">

              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <span>Email</span>
                  <strong>your-email@gmail.com</strong>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>

                <div>
                  <span>Phone</span>
                  <strong>+91 XXXXX XXXXX</strong>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <span>Location</span>
                  <strong>Rajkot, Gujarat</strong>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-lg-7">

            <form className="contact-form">

              <div className="row g-3">

                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-control"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="form-control"
                  />
                </div>

                <div className="col-12">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="form-control"
                  />
                </div>

                <div className="col-12">
                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="form-control"
                  ></textarea>
                </div>

                <div className="col-12">
                  <button type="submit" className="send-btn">
                    Send Message
                    <FaPaperPlane />
                  </button>
                </div>

              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;