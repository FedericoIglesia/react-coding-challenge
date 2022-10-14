import React, { useState } from "react";
import d from "./Drawer.module.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filters/Filter";
import { IconContext } from "react-icons";
import logo from "../../assets/favicon.ico";
import { useDispatch } from "react-redux";
import { moveContent } from "../../redux/actions";

function Drawer() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch(false);

  const showSideBar = () => {
    setSidebar(!sidebar);
    dispatch(moveContent(!sidebar));
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={d.drawer}>
          <Link to="#" className={d["menu-bars"]}>
            <FaBars onClick={showSideBar} />
          </Link>
          <Link to="/" style={{ marginLeft: "2.5rem", padding: 0 }}>
            <img src={logo} style={{ width: "1.5rem" }} />
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
