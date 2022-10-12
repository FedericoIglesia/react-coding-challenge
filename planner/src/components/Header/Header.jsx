import React from "react";
import he from "./Header.module.css";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "#666",
        height: "3rem",
      }}
    >
      <input
        type="checkbox"
        style={{ position: "absolute", opacity: 0 }}
        name="drawer-toggle"
        className={he["drawer-toggle"]}
      />
      <label for="drawer-toggle" className={he["drawer-toggle-label"]}></label>
      <h4>Header</h4>
      <nav className={he.drawer}>
        <ul>
          <li>
            <a href="#">Menu Item</a>
          </li>
          <li>
            <a href="#">Menu Item</a>
          </li>
          <li>
            <a href="#">Menu Item</a>
          </li>
          <li>
            <a href="#">Menu Item</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
