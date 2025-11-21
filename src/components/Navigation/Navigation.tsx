import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import React, { useState, MouseEvent } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Home from '@/components/Home/Home';
import Galleries from '@/components/Galleries/Galleries';
import GalleryRouter from '@/components/GalleryRouter/GalleryRouter';
import Investments from '@/components/Investments/Investments';
import InvestmentsRouter from '@/components/InvestmentsRouter/InvestmentsRouter';

import './Navigation.css';

const Navigation: React.FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('menu-home');

  const closeMobileMenu = () => {
    const checkbox = document.getElementById('menudrop') as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };

  const handleMenuClick = (event: MouseEvent<HTMLUListElement>) => {
    let li = event.target as HTMLElement | null;
    while (li && li.tagName.toLowerCase() !== 'li' && li.parentElement) {
      li = li.parentElement;
    }
    if (li && li.tagName.toLowerCase() === 'li') {
      let menuItem = li.id;
      if (menuItem === 'menu-galleries') menuItem = 'menu-children';
      else if (menuItem === 'menu-investments') menuItem = 'menu-sessions';
      else if (menuItem === 'menu-occasions') menuItem = 'menu-weddings';
      setSelectedMenuItem(menuItem);

      // CLOSE SLIDE-OVER PANEL AFTER CLICK
      closeMobileMenu();
    }
  };

  const getClassName = (menuItem: string) =>
    menuItem === selectedMenuItem ? 'current_page_item' : '';

  return (
    <>
      <header id="header">
        <div className="social-border">
          <div className="mobile-hamburger">
            <label htmlFor="menudrop" aria-label="Open navigation menu">
              <div className="menu-toggler-icon">
                <div className="toggler-line first-line" />
                <div className="toggler-line" />
                <div className="toggler-line last-line" />
              </div>
            </label>
          </div>

          <div className="social-network-container">
            <ul className="social-network social-circle">
              <li>
                <a
                  href="https://www.facebook.com/marieannaphotography"
                  target="_blank"
                  rel="noreferrer"
                  className="icoFacebook"
                  title="Facebook"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/marieannaphotos"
                  target="_blank"
                  rel="noreferrer"
                  className="icoInstagram"
                  title="Instagram"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>

          <div className="social-contact">
            <a
              href="mailto:marie@marieannaphotography.com"
              aria-label="Email Marie Anna Photography"
              className="icoEmail"
            >
              <FaEnvelope />
            </a>
            <a href="tel:+18035044253" aria-label="Call Marie Anna Photography">
              (803) 504-4253
            </a>
          </div>
        </div>

        <div id="masthead">
          <div id="branding">
            <div id="blog-title">
              <a href="/" title="Marie Anna Photography" rel="home">
                <img src="/img/name_logo.jpg" />
              </a>
            </div>
          </div>

          <nav id="menu_wrapper">
            <div id="menu">
              <input id="menudrop" type="checkbox" />

              <div className="mobile-nav-overlay">
                <div className="mobile-nav-panel">
                  <label
                    htmlFor="menudrop"
                    className="mobile-nav-close"
                    aria-label="Close navigation menu"
                  >
                    ×
                  </label>

                  <ul id="mainMenu" onClick={handleMenuClick}>
                    <li id="menu-home" className={getClassName('menu-home')}>
                      <Link to="/" onClick={closeMobileMenu}>Home</Link>
                    </li>

                    <li id="menu-about" className={getClassName('menu-about')}>
                      <Link to="/about" onClick={closeMobileMenu}>About</Link>
                    </li>

                    <li id="menu-galleries">
                      <Link to="/galleries" onClick={closeMobileMenu}>
                        <span>Galleries</span>
                      </Link>
                    </li>

                    <li id="menu-investments">
                      <Link to="/investments" onClick={closeMobileMenu}>
                        <span>Investments</span>
                      </Link>
                    </li>

                    <li id="menu-contact" className={getClassName('menu-contact')}>
                      <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main id="wrapper">
        <div id="wrapper-content-spacer" />
        <div id="main">
          <div id="container">
            <div id="content">
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/galleries" element={<Galleries />} />
                <Route path="/gallery/*" element={<GalleryRouter />} />
                <Route path="/investments" element={<Investments />} />
                <Route path="/investment/*" element={<InvestmentsRouter />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navigation;
