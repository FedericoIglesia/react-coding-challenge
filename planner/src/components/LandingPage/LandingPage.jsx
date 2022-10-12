import React from "react";
import { Link } from "react-router-dom";
import l from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={l["landing-container"]}>
      <div className={l["landing-btn__container"]}>
        <Link to="/home">
          <button className={l["landing-btn"]}>Start Planning!</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
