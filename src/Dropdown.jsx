import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ category, subcategories }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const handleMouseEnter = () => {
    setOpenMenu(true);
  };

  const handleMouseLeave = () => {
    setOpenMenu(false);
    setActiveSubcategory(null);
  };

  const handleSubcategoryEnter = (subcategory) => {
    setActiveSubcategory(subcategory);
  };

  const handleSubcategoryLeave = () => {
    setActiveSubcategory(null);
  };

  return (
    <div className="dropdown-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span className="category">
        {category}
      </span>
      {openMenu && (
        <div className="menu">
          {Object.keys(subcategories).map((sub) => (
            <div
              key={sub}
              className="menu-item"
              onMouseEnter={() => handleSubcategoryEnter(sub)}
              onMouseLeave={handleSubcategoryLeave}
            >
              {sub}
              {activeSubcategory === sub && (
                <div className="sub-menu">
                  {subcategories[sub].map((item) => (
                    <div key={item} className="sub-menu-item">{item}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
