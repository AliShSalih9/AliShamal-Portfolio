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
    event: React.MouseEvent<HTMLElement>,
    section: string,
    href: string,
  ) => {
    event.preventDefault();
    setActivePage(section);
    const wasMobileMenuOpen = isMobileMenuOpen;
    closeMobileMenu();
    window.history.pushState(null, "", href);

    const scrollToSection = () => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    if (wasMobileMenuOpen) {
      // wait for mobile menu scroll lock to be released and document flow to restore
      setTimeout(scrollToSection, 80);
    } else {
      scrollToSection();
    }
  };

  // Update active page if prop changes
  useEffect(() => {
    if (activeSection) setActivePage(activeSection);
  }, [activeSection]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const scrollY = window.scrollY;
    const html = document.documentElement;
    const body = document.body;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      window.scrollTo(0, scrollY); // restore position
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#hero", label: "Home", id: "hero" },
    { href: "#about", label: "About", id: "about" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#exp", label: "Experiences", id: "exp" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <>
      <header className="header">
        <div className="logo-nav">
          <div
            className="logo"
            onClick={(event) => handleNavClick(event, "hero", "#hero")}
          >
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
                    onClick={(event) =>
                      handleNavClick(event, link.id, link.href)
                    }
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
