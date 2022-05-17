import React, { useState } from 'react';
import classNames from 'classnames';


function NavTabs({ currentPage, handlePageChange }) {
  const [showNav, setShowNav] = useState(false);
  const navBarStyle = classNames({
    "collapse": true,
    "navbar-collapse": true,
    "show": showNav,
  });
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-secondary'>
      <div className="container-fluid">
    <a className="navbar-brand" href="https://github.com/ZahBenjamin">Benjamin Zah | Dev</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={showNav} aria-label="Toggle navigation" onClick={() => setShowNav(prev => !prev)}>
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className={navBarStyle}>
    <ul className="navbar-nav me-auto">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    </div>
    </div>
    </nav>
);
}

export default NavTabs;
