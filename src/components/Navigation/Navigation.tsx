// Navigation.tsx
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import React, { useState, MouseEvent } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from '@/components/Home/Home';
import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import GalleryRouter from '@/components/GalleryRouter/GalleryRouter';
import InvestmentsRouter from '@/components/InvestmentsRouter/InvestmentsRouter';

import './Header.css';
import './Navigation.css';
import Galleries from '../Galleries/Galleries';
import Investments from '../Investments/Investments';

const Navigation: React.FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('menu-home');

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
    }
  };

  const getClassName = (menuItem: string) =>
    menuItem === selectedMenuItem ? 'current_page_item' : '';

  return (
    <header id="header">
      <div className="social-border">
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
                href="https://www.instagram.com/marieannaphotography"
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
          <a href="mailto:marie@marieannaphotography.com" className="icoEmail"><FaEnvelope /></a>
          <a href="tel:8035044253">(803) 504-4253</a>
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
            <div className="navigation-menu-toggler">
              <a href="#">
                <div className="menu-toggler-icon">
                  <div className="toggler-line first-line" />
                  <div className="toggler-line" />
                  <div className="toggler-line last-line" />
                </div>
              </a>
            </div>

            <input id="menudrop" type="checkbox" readOnly />

            <ul id="mainMenu" onClick={handleMenuClick}>
              <li id="menu-home" className={getClassName('menu-home')}>
                <Link to="/">Home</Link>
              </li>
              <li id="menu-about" className={getClassName('menu-about')}>
                <Link to="/about">About</Link>
              </li>

              {/* Galleries */}
              <li id="menu-galleries">
                <Link to="/galleries">
                  <span>Galleries</span>
                </Link>
              </li>

              {/* Investments */}
              <li id="menu-investments">
                <Link to="/investments">
                  <span>Investments</span>
                </Link>
              </li>

              <li id="menu-contact" className={getClassName('menu-contact')}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

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
    </header>
  );
};

export default Navigation;
