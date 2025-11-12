// Navigation.tsx
import React, { useState, MouseEvent } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import GalleryRouter from '../GalleryRouter/GalleryRouter';
import InvestmentsRouter from '../InvestmentsRouter/InvestmentsRouter';

import './Header.css';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('menu-home');
  const [dropChecked, setDropChecked] = useState(false);
  const [galleryDropChecked, setGalleryDropChecked] = useState(false);
  const [occasionDropChecked, setOccasionDropChecked] = useState(false);
  const [investDropChecked, setInvestDropChecked] = useState(false);

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

  const toggleMainMenu = () => {
    setDropChecked((prev) => !prev);
    setGalleryDropChecked(false);
    setOccasionDropChecked(false);
    setInvestDropChecked(false);
  };

  const toggleGalleries = (event: MouseEvent<HTMLLIElement>) => {
    const el = event.currentTarget;
    if (el.id !== 'menu-galleries') return;
    setDropChecked(true);
    setInvestDropChecked(false);
    setGalleryDropChecked((prev) => !prev);
    setOccasionDropChecked(false);
  };

  const toggleOccasions = (event: MouseEvent<HTMLLIElement>) => {
    const el = event.currentTarget;
    if (el.id !== 'menu-occasions') return;
    setDropChecked(true);
    setInvestDropChecked(false);
    setGalleryDropChecked(true);
    setOccasionDropChecked((prev) => !prev);
  };

  const toggleInvestments = (event: MouseEvent<HTMLLIElement>) => {
    const el = event.currentTarget;
    if (el.id !== 'menu-investments') return;
    setDropChecked(true);
    setGalleryDropChecked(false);
    setInvestDropChecked((prev) => !prev);
  };

  return (
    <header id="header">
      <div id="masthead">
        <div id="branding">
          <div id="blog-title">
            <a href="/" title="Marie Anna Photography" rel="home">
              <div className="description">Classic. Inspiring. Original.</div>
            </a>
          </div>
        </div>

        <nav id="menu_wrapper">
          <div id="menu">
            <div className="navigation-menu-toggler" onClick={toggleMainMenu}>
              <a href="#">
                <div className="menu-toggler-icon">
                  <div className="toggler-line first-line" />
                  <div className="toggler-line" />
                  <div className="toggler-line last-line" />
                </div>
              </a>
            </div>

            <input
              id="menudrop"
              type="checkbox"
              checked={dropChecked}
              readOnly
            />

            <ul id="mainMenu" onClick={handleMenuClick}>
              <li id="menu-home" className={getClassName('menu-home')}>
                <Link to="/">Home</Link>
              </li>
              <li id="menu-about" className={getClassName('menu-about')}>
                <Link to="/about">About</Link>
              </li>

              {/* Galleries */}
              <li id="menu-galleries" onClick={toggleGalleries}>
                <Link to="/gallery/children">
                  <span>Galleries</span>
                  <span id="galleryToggler">
                    <i
                      className={
                        galleryDropChecked
                          ? 'fa fa-caret-down'
                          : 'fa fa-caret-right'
                      }
                      aria-hidden="true"
                    />
                  </span>
                </Link>

                <input
                  id="gallerydrop"
                  type="checkbox"
                  checked={galleryDropChecked}
                  readOnly
                />

                <ul id="gallerySubMenu">
                  <li
                    id="menu-children"
                    className={getClassName('menu-children')}
                  >
                    <Link to="/gallery/children">Children</Link>
                  </li>
                  <li id="menu-family" className={getClassName('menu-family')}>
                    <Link to="/gallery/family">Family</Link>
                  </li>
                  <li
                    id="menu-justforu"
                    className={getClassName('menu-justforu')}
                  >
                    <Link to="/gallery/just-for-fun">Just For Fun</Link>
                  </li>
                  <li
                    id="menu-vintage_flair"
                    className={getClassName('menu-vintage_flair')}
                  >
                    <Link to="/gallery/vintage_flair">Vintage Flair</Link>
                  </li>

                  <li id="menu-occasions" onClick={toggleOccasions}>
                    <span>Special Occasions</span>
                    <span id="occasionToggler">
                      <i
                        className={
                          occasionDropChecked
                            ? 'fa fa-caret-down'
                            : 'fa fa-caret-right'
                        }
                        aria-hidden="true"
                      />
                    </span>

                    <input
                      id="occasionDrop"
                      type="checkbox"
                      checked={occasionDropChecked}
                      readOnly
                    />
                    <ul id="occasionSubMenu">
                      <li
                        id="menu-weddings"
                        className={getClassName('menu-weddings')}
                      >
                        <Link to="/gallery/weddings">Weddings</Link>
                      </li>
                      <li
                        id="menu-graduates"
                        className={getClassName('menu-graduates')}
                      >
                        <Link to="/gallery/graduates">Graduate Portraits</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* Investments */}
              <li id="menu-investments" onClick={toggleInvestments}>
                <Link to="/investments/sessions">
                  <span>Investments</span>
                  <span id="investToggler">
                    <i
                      className={
                        investDropChecked
                          ? 'fa fa-caret-down'
                          : 'fa fa-caret-right'
                      }
                      aria-hidden="true"
                    />
                  </span>
                </Link>
                <input
                  id="investdrop"
                  type="checkbox"
                  checked={investDropChecked}
                  readOnly
                />
                <ul id="investSubMenu">
                  <li
                    id="menu-sessions"
                    className={getClassName('menu-sessions')}
                  >
                    <Link to="/investments/sessions">Session Pricing</Link>
                  </li>
                  <li
                    id="menu-fine-art"
                    className={getClassName('menu-fine-art')}
                  >
                    <Link to="/investments/a-la-carte">A-la-carte Items</Link>
                  </li>
                  <li
                    id="menu-selecting-photos"
                    className={getClassName('menu-selecting-photos')}
                  >
                    <Link to="/investments/selecting-photos">
                      Selecting Your Photos
                    </Link>
                  </li>
                </ul>
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
                <Route path="/gallery/*" element={<GalleryRouter />} />
                <Route path="/investments/*" element={<InvestmentsRouter />} />
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
