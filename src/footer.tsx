// Footer.jsx
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          © {currentYear} Ali Shamal Salih. Built with{" "}
          <FontAwesomeIcon icon={faCode} /> by Ali Shamal
        </p>
      </div>
    </footer>
  );
}

export default Footer;
