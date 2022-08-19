import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="./images/alien.png" alt="" />
        <h2 className="header--title">
          .meme<span>Generator</span>
        </h2>
      </div>
      <h3>make your own meme</h3>
    </header>
  );
};
export default Header;
