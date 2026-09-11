import {
  faBars,
  faMinus,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./header.css";

interface HeaderProps {
  activeSection?: string;
  activeDarkMode?: boolean;
  setActiveDarkMode?: (value: boolean) => void;
}

function Header({
  activeSection,
  activeDarkMode,
  setActiveDarkMode,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("hero");

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    section: string,
    href: string,
  ) => {
    event.preventDefault();
    setActivePage(section);
    closeMobileMenu();
    window.history.pushState(null, "", href);
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Update active page if prop changes
  useEffect(() => {
    if (activeSection) setActivePage(activeSection);
  }, [activeSection]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#hero", label: "Home", id: "hero" },
    { href: "#about", label: "About", id: "about" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#services", label: "Services", id: "services" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#exp", label: "Experiences", id: "exp" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <>
      <header className="header">
        <div className="logo-nav">
          <div className="logo">
            <h1 className="logo-icon">&lt;/&gt;</h1>
            <h1>Ali Tech</h1>
          </div>
          <nav className="main-menu">
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={activePage === link.id ? "active" : ""}
                    onClick={() => setActivePage(link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="left-button">
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faMinus : faBars}
            className={`icon-menu ${isMobileMenuOpen ? "open" : ""}`}
            onClick={toggleMobileMenu} style={{ fontSize: "1.5rem", cursor: "pointer", color: "var(--color-accent)" }}
          />
        </div>
        <div
          className={
            activeDarkMode === true
              ? "dark-mode-toggle active"
              : "dark-mode-toggle"
          }
          onClick={() => {
            if (setActiveDarkMode) {
              setActiveDarkMode(!activeDarkMode);
            }
            localStorage.setItem("darkMode", JSON.stringify(!activeDarkMode));
          }}
        >
          <FontAwesomeIcon
            icon={faSun}
            style={activeDarkMode ? { opacity: 0 } : {}}
            className="icon-sun switch-icon"
          />
          <FontAwesomeIcon
            icon={faMoon}
            style={activeDarkMode ? { opacity: 1 } : { opacity: 0 }}
            className="icon-moon switch-icon"
          />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`overlay ${isMobileMenuOpen ? "active" : ""}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={`mobile-${link.id}`} className="list-item">
                <a
                  href={link.href}
                  className={activePage === link.id ? "active" : ""}
                  onClick={(event) => handleNavClick(event, link.id, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <div className="apperance">
                <div className="icon-apperance" style={{ color: "var(--bg-subColor)" }}>
                  Appearance
                </div>
                <div
                  className={
                    activeDarkMode === true ? "dark-mode active" : "dark-mode"
                  }
                  onClick={() => {
                    if (setActiveDarkMode) {
                      setActiveDarkMode(!activeDarkMode);
                    }
                    localStorage.setItem(
                      "darkMode",
                      JSON.stringify(!activeDarkMode),
                    );
                  }}
                >
                  <FontAwesomeIcon
                    icon={faSun}
                    style={activeDarkMode ? { opacity: 0 } : {}}
                    className="icon-sun switch-icon"
                  />
                  <FontAwesomeIcon
                    icon={faMoon}
                    style={activeDarkMode ? { opacity: 1 } : { opacity: 0 }}
                    className="icon-moon switch-icon"
                  />
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
