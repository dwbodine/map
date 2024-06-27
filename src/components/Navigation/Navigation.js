import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import GalleryRouter from '../GalleryRouter/GalleryRouter';
import InvestmentsRouter from '../InvestmentsRouter/InvestmentsRouter';
import './Header.css';
import './Navigation.css';

export default function Navigation () {
    const [selectedMenuItem, setSelectedMenuItem] = useState('menu-home');
    const [dropChecked, setDropChecked] = useState(false);
    const [galleryDropChecked, setGalleryDropChecked] = useState(false);
    const [investDropChecked, setInvestDropChecked] = useState(false);

    const _menuOnClick = (event) => {
        var li = event.target;
        while (li.tagName.toLowerCase() !== 'li' && li.parentElement != null) {
            li = li.parentElement;
        }
        if (li.tagName.toLowerCase() === 'li') {
            var menuItem = li.id;
            if (menuItem === 'menu-galleries') {
                menuItem = 'menu-children';
            } else if (menuItem === 'menu-investments') {
                menuItem = 'menu-sessions';
            }
            setSelectedMenuItem(menuItem);
        }
    };

    const getClassName = (menuItem) => {
        return menuItem === selectedMenuItem ? 'current_page_item' : '';
    };

    const _toggleOnClick = () => {
        var isChecked = dropChecked === true;
        setDropChecked(!isChecked);
        setGalleryDropChecked(false);
        setInvestDropChecked(false);
    };

    const _toggleGalleries = (event) => {
        if (event.target.offsetParent.id !== 'menu-galleries') {
            return;
        }
        var isChecked = galleryDropChecked === true;
        setDropChecked(true);
        setInvestDropChecked(false);
        setGalleryDropChecked(!isChecked);
    };

    const _toggleInvest = (event) => {
        if (event.target.offsetParent.id !== 'menu-investments') {
            return;
        }
        var isChecked = investDropChecked === true;
        setDropChecked(true);
        setGalleryDropChecked(false);
        setInvestDropChecked(!isChecked);
    };

    return (
        <BrowserRouter>
            <div id="header">
                <div id="masthead">
                    <div id="branding">
                        <div id="blog-title">
                            <a href="/" title="Marie Anna Photography" rel="home">
                                <div className="description">Classic. Inspiring. Original.</div>
                            </a>
                        </div>
                    </div>
                    <div id="menu_wrapper">
                        <div id="menu">
                            <div className="navigation-menu-toggler" onClick={_toggleOnClick}>
                                <a className="" href="#">
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
                            <ul id="mainMenu" onClick={_menuOnClick}>
                                <li id="menu-home" className={getClassName('menu-home')}>
                                    <Link to="/">
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li id="menu-about" className={getClassName('menu-about')}>
                                    <Link to="/about">
                                        <span>About</span>
                                    </Link>
                                </li>
                                <li id="menu-galleries" onClick={_toggleGalleries}>
                                    <Link to="/gallery/children">
                                        <span>Galleries</span>
                                        <span id="galleryToggler">
                                            <i
                                                className={
                                                    galleryDropChecked ?
                                                        'fa fa-caret-down' :
                                                        'fa fa-caret-right'
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
                                            <Link to="/gallery/children">
                                                <span>Children</span>
                                            </Link>
                                        </li>
                                        <li
                                            id="menu-maternity"
                                            className={getClassName('menu-maternity')}
                                        >
                                            <Link to="/gallery/maternity">
                                                <span>Maternity</span>
                                            </Link>
                                        </li>
                                        <li
                                            id="menu-family"
                                            className={getClassName('menu-family')}
                                        >
                                            <Link to="/gallery/family">
                                                <span>Family</span>
                                            </Link>
                                        </li>
                                        <li
                                            id="menu-justforu"
                                            className={getClassName('menu-justforu')}
                                        >
                                            <Link to="/gallery/just-for-you">
                                                <span>Just For You</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li id="menu-investments" onClick={_toggleInvest}>
                                    <Link to="/investments/sessions">
                                        <span>Investments</span>
                                        <span id="investToggler">
                                            <i
                                                className={
                                                    investDropChecked ?
                                                        'fa fa-caret-down' :
                                                        'fa fa-caret-right'
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
                                            <Link to="/investments/sessions">
                                                <span>Session Pricing</span>
                                            </Link>
                                        </li>
                                        <li
                                            id="menu-fine-art"
                                            className={getClassName('menu-fine-art')}
                                        >
                                            <Link to="/investments/fine-art">
                                                <span>Fine Art Prints</span>
                                            </Link>
                                        </li>
                                        <li
                                            id="menu-selecting-photos"
                                            className={getClassName('menu-selecting-photos')}
                                        >
                                            <Link to="/investments/selecting-photos">
                                                <span>Selecting Your Photos</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li id="menu-contact" className={getClassName('menu-contact')}>
                                    <Link to="/contact">
                                        <span>Contact</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="wrapper">
                <div id="wrapper-content-spacer" />
                <div id="main">
                    <div id="container">
                        <div id="content">
                            <Switch>
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="/contact">
                                    <Contact />
                                </Route>
                                <Route path="/gallery">
                                    <GalleryRouter />
                                </Route>
                                <Route path="/investments">
                                    <InvestmentsRouter />
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}
