import React from "react";
import { useSelector } from "react-redux";
import c from "./Card.module.css";

export default function Industry(industry) {
  const talent = useSelector((state) => state.talent);

  return (
    <div className={c["card-container"]}>
      <h2>{industry}</h2>
      <div>
        <h4>
          Talent available:{" "}
          {
            talent.filter((c) => c.industry == industry && c.talentName !== "")
              .length
          }
        </h4>
      </div>
    </div>
  );
}
