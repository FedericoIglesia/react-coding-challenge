import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchTalent } from "../../redux/actions";
import Swal from "sweetalert2";
import axios from "axios";

function SearchBar() {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  const getData = async () => {
    let response = await axios.get("planning.json");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  function handleInput(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(e);

    if (name.length == 0) {
      Swal.fire({
        icon: "error",
        text: "Please enter a name or id",
      });
    }
    dispatch(searchTalent(name));
    setName("");
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} style={{ overflowX: "hidden" }}>
      <input
        type="text"
        placeholder="Look for talent by name or ID..."
        onChange={(e) => handleInput(e)}
        value={name}
        style={{
          margin: "3rem 1rem",
          width: "90%",
          transform: "translateX(-0.5rem)",
          height: "2rem",
          border: "1px solid #ff7500",
          borderRadius: "3px",
          paddingLeft: "5px",
          fontSize: "0.9rem",
          outline: "none",
        }}
      />
    </form>
  );
}

export default SearchBar;
