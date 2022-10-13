import React from "react";
import { useSelector } from "react-redux";

function Filter() {
  const data = useSelector((state) => state.talent);

  const cities = [...new Set(data.map((c) => c.officeCity))];

  console.log(cities);
  return (
    <div>
      <h6>Office City</h6>
      <select>
        {cities.map((city, idx) => {
          return (
            <option value={city.toLowerCase()} key={idx}>
              {city}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Filter;
