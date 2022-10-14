import React from "react";
import { useSelector } from "react-redux";
import c from "./Card.module.css";

function City({ city }) {
  const talent = useSelector((state) => state.talent);

  return (
    <div className={c["card-container"]}>
      <h2>{city}</h2>
      <div>
        <h4>
          Talent available:{" "}
          {
            talent.filter((c) => c.officeCity == city && c.talentName !== "")
              .length
          }
        </h4>
      </div>
    </div>
  );
}

export default City;
