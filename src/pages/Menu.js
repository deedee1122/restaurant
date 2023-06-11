import React from "react";
import { menuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">The Menu Pizza and African Dishes</h1>
      <div className="menuList">
        {menuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              Image={menuItem.Image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}
