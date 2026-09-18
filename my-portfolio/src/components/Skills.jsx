import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      description: "Creating structured and semantic web pages.",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      description: "Designing responsive and modern user interfaces.",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
      description: "Building responsive layouts quickly and efficiently.",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      description: "Adding logic and interactive functionality.",
    },
    {
      icon: <FaReact />,
      name: "ReactJS",
      description: "Building reusable component-based applications.",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">

        <div className="section-heading text-center">
          <p>MY SKILLS</p>
          <h2>
            Technologies I <span>Work With</span>
          </h2>
        </div>

        <div className="row g-4">

          {skills.map((skill, index) => (
            <div className="col-md-6 col-lg" key={index}>
              <div className="skill-card">
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;