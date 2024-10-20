import { useState } from "react";
import "./index.css";

const NavItem = (props) => {
  const { eachItem, activeNavItem, setActiveNavItem } = props;
  const { id } = eachItem;

  const handleItemSelect = () => {
    setActiveNavItem(id);
  };

  return (
    <li
      className={`mx-2 nav-item cursor-pointer ${
        activeNavItem === id ? "selected" : ""
      } flex`}
      onClick={handleItemSelect}
    >
      <a href="#">{id}</a>
    </li>
  );
};

export default NavItem;
