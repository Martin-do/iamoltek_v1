import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MainHome from './pages/MainHome';
import InitiativeHome from './pages/InitiativeHome';
import StoryDetail from './pages/StoryDetail';
import logoLightBg from './assets/logo-light-bg.png';
import logoWhite from './assets/logo-white.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isInitiative = location.pathname.startsWith('/initiative');
  const navClass = isInitiative ? 'site-nav site-nav-light' : 'site-nav site-nav-dark';

  const links = isInitiative
    ? [
        { label: 'Focus', href: '#focus' },
        { label: 'Impact', href: '#impact' },
      ]
    : [
        { label: 'Profile', href: '#profile' },
        { label: 'Honour', href: '#honour' },
        { label: 'Work', href: '#work' },
        { label: 'Moments', href: '#moments' },
      ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={navClass}>
      <div className="nav-inner">
        <Link to="/" className="brand-mark" onClick={closeMenu} aria-label="Oltek home">
          <img src={isInitiative ? logoLightBg : logoWhite} alt="Oltek" />
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${isOpen ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <Link to={isInitiative ? '/' : '/initiative'} onClick={closeMenu} className="initiative-link">
            {isInitiative ? 'Back to Oltek' : 'The Initiative'}
          </Link>
          <a href={isInitiative ? 'mailto:info@iamoltek.com' : '#contact'} onClick={closeMenu} className="nav-cta">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="app-root">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/initiative" element={<InitiativeHome />} />
            <Route path="/story/:slug" element={<StoryDetail />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
