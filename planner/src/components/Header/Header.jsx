import React from "react";
import Drawer from "../Drawer/Drawer";

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
      <Drawer />
    </div>
  );
}
