import React, { useState } from "react";
import { HeaderWrapper } from "../../styles/Header/Header";
import Navbar from "../Navbar/Navbar";
import MenuButton from "../Menu/MenuButton";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <div className="logo">
        <img src="/images/logo.png" alt="Logo de Full Slab" />
      </div>
      <Navbar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  );
};

export default Header;
