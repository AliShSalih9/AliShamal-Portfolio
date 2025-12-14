import { faList, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import './header.css';
import cvPdf from '/assets/Ali_Shamal_Mobile_Developer.pdf'


interface HeaderProps {
  activeSection?: string;
}

function Header({ activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('hero');

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleNavClick = (section: string) => {
    setActivePage(section);
    closeMobileMenu();
  };

  // Update active page if prop changes
  useEffect(() => {
    if (activeSection) setActivePage(activeSection);
  }, [activeSection]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#hero', label: 'Home', id: 'hero' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#exp', label: 'Experiences', id: 'exp' },
    { href: '#contact', label: 'Contact', id: 'contact' },
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
            icon={isMobileMenuOpen ? faTimes : faList}
            className='icon-menu'
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          />
          // In your JSX:
<button 
  className='download-Button'   
  onClick={() => window.open(cvPdf, '_blank')}
>
  Download CV
</button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={`mobile-${link.id}`}>
                <a
                  href={link.href}
                  className={activePage === link.id ? "active" : ""}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
