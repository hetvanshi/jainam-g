import React from "react";
import "./AboutUs.css";
import { assets } from "../../assets/assets";
const AboutUs = () => {
  return (
    <div className="main-part" id="about-us">
      <img className="About-img" src={assets.menu_2} alt="" />
      <p>
        <span>Welcome to JainamG Khakhra,</span>
        where we specialize in crafting handmade khakhras with a commitment to
        quality and tradition. Each khakhra is lovingly made using the finest
        ingredients and traditional techniques, ensuring a crisp texture and
        authentic flavor in every bite.Our diverse range includes classic
        flavors as well as innovative combinations, catering to every palate.
        Whether you crave the timeless simplicity of Plain Salted or the robust
        aroma of Methi, Jainamg Khakhra promises a delicious snacking
        experience. Join us in savoring the essence of handmade excellence,
        where every khakhra embodies our dedication to taste, freshness, and
        satisfaction.
      </p>
    </div>
  );
};

export default AboutUs;
