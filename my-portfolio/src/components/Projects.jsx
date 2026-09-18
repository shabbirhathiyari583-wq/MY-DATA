import {
  FaCloudSun,
  FaShoppingCart,
  FaTasks,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      icon: <FaCloudSun />,
      title: "Weather App",
      description:
        "A weather application that shows current weather information based on the selected city.",
      technologies: "HTML • CSS • JavaScript • Weather API",
    },
    {
      icon: <FaShoppingCart />,
      title: "Smart Product Management",
      description:
        "A product management application with add, edit, delete, search and sorting functionality.",
      technologies: "HTML • CSS • JavaScript • LocalStorage",
    },
    {
      icon: <FaTasks />,
      title: "Task Manager",
      description:
        "A React-based task manager for creating, completing and managing daily tasks.",
      technologies: "ReactJS • JavaScript • Bootstrap",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <div className="section-heading">
          <p>MY PROJECTS</p>

          <h2>
            Things I've <span>Built</span>
          </h2>
        </div>

        <div className="row g-4">

          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="project-card">
                <div className="project-top">
                  <div className="project-icon">
                    {project.icon}
                  </div>

                  <span className="project-number">
                    0{index + 1}
                  </span>

                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies}
                </div>

                <div className="project-links">

                  <a href="#" className="project-link">
                    <FaGithub />
                    GitHub
                  </a>

                  <a href="#" className="project-link">
                    Live Demo
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;