import React from "react";
import { MenuData } from "../../constants";
import MenuItem from "./MenuItem";
const Menu = () => {
  return (
    <ul className="navbar-nav" style={{ marginLeft: "4%" }}>
      {MenuData.map((val, index) => {
        return (
          <li className="nav-item" key={index}>
            <MenuItem name={val.name} url={val.url} />
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
