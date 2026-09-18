function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">

        <a className="navbar-brand d-flex align-items-center" href="#home">
          <div className="logo-box">SH</div>

          <div className="brand-text">
            <h5>SHABBIR HATHIYARI</h5>
            <span>Full Stack Web Developer</span>
          </div>
        </a>

        <button className="navbar-toggler"type="button"data-bs-toggle="collapse"data-bs-target="#portfolioNavbar"aria-controls="portfolioNavbar"aria-expanded="false"aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="portfolioNavbar">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <a className="nav-link active" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#education">
                Education
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

          </ul>

          <a href="#contact" className="resume-btn">
            Contact Me
          </a>

        </div>
      </div>
    </nav>
  )
}

export default Navbar