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
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Look for talent by name or ID"
        onChange={(e) => handleInput(e)}
        value={name}
      />
    </form>
  );
}

export default SearchBar;
