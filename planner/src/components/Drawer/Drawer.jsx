import React, { useState } from "react";
import d from "./Drawer.module.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filters/Filter";
import { IconContext } from "react-icons";
import logo from "../../assets/favicon.ico";

function Drawer() {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={d.drawer}>
          <Link to="#" className={d["menu-bars"]}>
            <FaBars onClick={showSideBar} />
          </Link>
          <Link to="/">
            {" "}
            <img src={logo} style={{ width: "1.5rem", marginLeft: "1rem" }} />
          </Link>
          <h4>Seeking Heroes</h4>
          <h6>planner</h6>
        </div>
        <nav className={sidebar ? d["nav-menu-active"] : d["nav-menu"]}>
          <ul className={d["nav-menu-items"]}>
            <li>
              <SearchBar />
            </li>
            <li>
              <Filter />
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Drawer;
