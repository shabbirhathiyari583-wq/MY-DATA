import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-content">

          <div>
            <h3>SHABBIR HATHIYARI</h3>
            <p>Full Stack Web Developer</p>
          </div>

          <div className="footer-socials">
            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaInstagram />
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Shabbir Hathiyari. All Rights Reserved.
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;