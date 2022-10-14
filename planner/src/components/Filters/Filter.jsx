import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCity,
  filterByBooking,
  filterBySkills,
  filterByIndustry,
  filterByOpUnit,
  selectionBySkills,
} from "../../redux/actions";
import d from "../Drawer/Drawer.module.css";

function Filter() {
  const data = useSelector((state) => state.talent);
  const dispatch = useDispatch();
  const [lang, setLang] = useState("");

  const cities = [...new Set(data.map((c) => c.officeCity))].sort();
  const grades = [
    ...new Set(
      data.map((g) => g.bookingGrade).filter((b) => b.bookingGrade !== "")
    ),
  ];
  const languages = [
    ...new Set(
      data.map((s) =>
        s.requiredSkills
          .filter((s) => s.category == "Language")
          .map((b) => b.name)
      )
    ),
  ]
    .sort()
    .flat();
  const coding = [
    ...new Set(
      data.map((s) =>
        s.requiredSkills
          .filter((s) => s.category == "Coding Language")
          .map((b) => b.name)
      )
    ),
  ]
    .sort()
    .flat();
  const industries = [...new Set(data.map((i) => i.industry))];
  const opUnits = [...new Set(data.map((o) => o.operatingUnit))].sort();

  function handleCityFilter(e) {
    dispatch(filterByCity(e.target.value));
  }

  function handleBookingFilter(e) {
    dispatch(filterByBooking(e.target.value));
  }

  function handleSkillSelection(e) {
    e.target.value == "coding" ? setLang("coding") : setLang("language");
  }

  function handleSkillsFilter(e) {
    dispatch(filterBySkills(e.target.value));
  }

  function handleIndustryFilter(e) {
    dispatch(filterByIndustry(e.target.value));
  }

  function handleOpUnitFilter(e) {
    dispatch(filterByOpUnit(e.target.value));
    console.log(e.target.value);
  }

  return (
    <div>
      <h6>Office City</h6>
      <select
        onChange={(e) => handleCityFilter(e)}
        className={d["select-filters"]}
      >
        <option selected value="all">
          All Cities
        </option>
        {cities.map((city, idx) => {
          return (
            <>
              <option value={city.toLowerCase()} key={idx}>
                {city}
              </option>
            </>
          );
        })}
      </select>
      <h6>Booking Grade</h6>
      <select
        onChange={(e) => handleBookingFilter(e)}
        className={d["select-filters"]}
      >
        <option selected value="all">
          All Booking Grades
        </option>
        {grades.map((grade, idx) => {
          return (
            <>
              <option value={grade.toLowerCase()} key={idx}>
                {grade}
              </option>
            </>
          );
        })}
      </select>
      <h4 style={{ margin: "1.5rem 0 0.5rem 0.5rem" }}>Skills</h4>
      <div
        onChange={(e) => handleSkillSelection(e)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label className={d["label-filters"]}>
          Language
          <input type="radio" value="language" name="lang" />
        </label>
        <label className={d["label-filters"]}>
          Coding Language
          <input type="radio" value="coding" name="lang" />
        </label>
        <select
          onChange={(e) => handleSkillsFilter(e)}
          className={d["select-filters"]}
        >
          <option selected value="all">
            All
          </option>
          {lang == "language"
            ? [...new Set(languages)].map((name, idx) => {
                return (
                  <>
                    <option value={name.toLowerCase()} key={idx}>
                      {name}
                    </option>
                  </>
                );
              })
            : [...new Set(coding)].map((name, idx) => {
                return (
                  <>
                    <option value={name.toLowerCase()} key={idx}>
                      {name}
                    </option>
                  </>
                );
              })}
        </select>
      </div>
      <h6>Industry</h6>
      <select
        onChange={(e) => handleIndustryFilter(e)}
        className={d["select-filters"]}
      >
        <option selected value="all">
          All Industries
        </option>
        {industries.map((industry, idx) => {
          return (
            <>
              <option value={industry.toLowerCase()} key={idx}>
                {industry}
              </option>
            </>
          );
        })}
      </select>
      <h6>Operating Unit</h6>
      <select
        onChange={(e) => handleOpUnitFilter(e)}
        className={d["select-filters"]}
      >
        <option selected value="all">
          All Operating Units
        </option>
        {opUnits.map((opUnit, idx) => {
          return (
            <>
              <option value={opUnit.toLowerCase()} key={idx}>
                {opUnit}
              </option>
            </>
          );
        })}
      </select>
    </div>
  );
}

export default Filter;
