import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function CityDetail() {
  const data = useSelector((state) => state.talent);
  const history = useHistory();
  const currentCity = useSelector((state) => state.currentCity);
  return (
    <div>
      <button onClick={() => history.push("/home")}>Back</button>
      <h1>{currentCity[0].officeCity}</h1>
      <div className="App">
        <table>
          <tr>
            <th>ID</th>
            <th>Original ID</th>
            <th>Name</th>
            <th>Booking Grade</th>
            <th>Operating Unit</th>
            <th>Office City</th>
            <th>Industry</th>
            <th>Language Skills</th>
            <th>Coding Skills</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
          {currentCity.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.originalId}</td>
                <td>{val.talentName}</td>
                <td>{val.bookingGrade}</td>
                <td>{val.operatingUnit}</td>
                <td>{val.officeCity}</td>
                <td>{val.industry}</td>
                <td>
                  {val.requiredSkills
                    .filter((c) => c.category == "Language")
                    .map((l) => l.name + " ")}
                </td>
                <td>
                  {val.requiredSkills
                    .filter((c) => c.category == "Coding Language")
                    .map((l, i) => l.name + " ")}
                </td>
                <td>{val.startDate}</td>
                <td>{val.endDate}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
