import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        {/* <h2>Order your favourite khakhra here</h2> */}
        <h2>Find Your Favorite Khakhra Today</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of khakhra
          varieties crafted with the finest ingredients and culinary expertise.
          Our mission is to satisfy your craving and elevate your snacking
          experience, one delicious bite at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
