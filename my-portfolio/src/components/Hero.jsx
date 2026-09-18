import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 hero-content">

            <p className="hero-intro">
              HELLO, I'M
            </p>

            <h1>
              Shabbir <span>Hathiyari</span>
            </h1>

            <h2>
              Full Stack Web Developer
            </h2>

            <p className="hero-description">
              I build modern and responsive websites using
              HTML, CSS, Bootstrap, JavaScript and ReactJS.
              I enjoy turning ideas into clean and user-friendly
              web experiences.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="primary-btn">
                <FaCode />
                View My Projects
                <FaArrowRight />
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>

            </div>

            <div className="social-links">

              <a href="#" aria-label="GitHub">
                <FaGithub />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>

              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>

            </div>

          </div>

          <div className="col-lg-6">
            <div className="hero-visual">

              <div className="code-card">
                <FaCode />
              </div>

              <div className="circle-shape"></div>

              <div className="hero-profile">
                <div className="profile-placeholder">
                  <img src="./profile.png" alt="" />
                </div>
              </div>

              <div className="floating-card">
                <strong>Code</strong>
                <span>Build • Grow</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;