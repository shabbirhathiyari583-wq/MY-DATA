import {
  FaUser,
  FaLaptopCode,
  FaCode,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">

        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>
            Let's Know About <span>Me</span>
          </h2>
        </div>

        <div className="row align-items-center">

          <div className="col-lg-6">

            <h3>
              Turning Ideas Into
              <span> Digital Experiences</span>
            </h3>

            <p className="about-text">
              I am a passionate Full Stack Web Developer who enjoys
              building modern, responsive and user-friendly websites.
              I like understanding how things work and turning ideas
              into functional web applications.
            </p>

            <p className="about-text">
              I am currently developing my skills in frontend and
              backend technologies while working on practical projects.
              My main technologies include HTML, CSS, Bootstrap,
              JavaScript and ReactJS.
            </p>

            <a href="#skills" className="about-btn">
              Explore My Skills <FaArrowRight />
            </a>

            <div className="about-stats">

              <div className="stat-box">
                <FaLaptopCode />
                <div>
                  <h4>5+</h4>
                  <p>Projects</p>
                </div>
              </div>

              <div className="stat-box">
                <FaCode />
                <div>
                  <h4>5</h4>
                  <p>Technologies</p>
                </div>
              </div>

              <div className="stat-box">
                <FaGraduationCap />
                <div>
                  <h4>1+</h4>
                  <p>Year Learning</p>
                </div>
              </div>

            </div>

          </div>

          <div className="col-lg-6">

            <div className="about-card">

              <div className="about-card-header">
                <div className="about-icon">
                  <FaUser />
                </div>

                <div>
                  <p>PROFILE</p>
                  <h4>Personal Information</h4>
                </div>
              </div>

              <div className="about-info">

                <div>
                  <span>
                    <FaUser />
                    Name
                  </span>
                  <strong>Shabbir Hathiyari</strong>
                </div>

                <div>
                  <span>
                    <FaLaptopCode />
                    Role
                  </span>
                  <strong>Full Stack Web Developer</strong>
                </div>

                <div>
                  <span>
                    <FaCode />
                    Skills
                  </span>
                  <strong>HTML • CSS • JS • React</strong>
                </div>

                <div>
                  <span>
                    <FaGraduationCap />
                    Education
                  </span>
                  <strong>Web Development Course</strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;