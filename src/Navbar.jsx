import React from 'react';
import Dropdown from './Dropdown';
import categories from './category.json';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src="/logo.jpeg" alt="Logo" />
        </div>
      </div>
      <div className="navbar-center">
        <input type="text" className="search-input" placeholder="Search products" />
        <span className='navbar-search'>🔍</span>
      </div>
      <div className="navbar-right">
        {Object.keys(categories).map((category) => (
          <Dropdown key={category} category={category} subcategories={categories[category]} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
