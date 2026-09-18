import {
  FaGraduationCap,
  FaLaptopCode,
  FaCalendarAlt,
} from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">

        <div className="section-heading text-center">
          <p>MY JOURNEY</p>
          <h2>
            Education & <span>Learning</span>
          </h2>
        </div>

        <div className="education-card">

          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <div className="education-content">

            <div className="education-top">
              <div>
                <h3>Full Stack Web Development</h3>
                <h4>Red & White Skill Education</h4>
              </div>

              <span>
                <FaCalendarAlt />
                Currently Learning
              </span>
            </div>

            <p>
              Learning full stack web development with a focus on
              frontend technologies and modern web development.
              Working on practical projects to improve programming
              and development skills.
            </p>

            <div className="education-skills">
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>JavaScript</span>
              <span>ReactJS</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;