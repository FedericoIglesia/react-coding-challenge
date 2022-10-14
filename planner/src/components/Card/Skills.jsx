import React from "react";
import { useSelector } from "react-redux";
import c from "./Card.module.css";

function Skills(skills) {
  const talent = useSelector((state) => state.talent);

  return (
    <div className={c["card-container"]}>
      <h2>{skills}</h2>
      <div>
        <h4>
          Talent available:{" "}
          {
            talent.filter((c) =>
              c.requiredSkills.filter(
                (s) =>
                  s.name.toLowerCase() == skills.toLowerCase() &&
                  c.talentName !== ""
              )
            ).length
          }
        </h4>
      </div>
    </div>
  );
}

export default Skills;
