import React from "react";
import image from "../assets/image.png";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={image} />
      </div>
    </>
  );
};

export default Header;
