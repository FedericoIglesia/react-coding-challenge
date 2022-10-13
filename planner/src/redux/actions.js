import axios from "axios";
import Swal from "sweetalert2";

export const GET_TALENT = "GET_TALENT";
export const SEARCH_TALENT = "SEARCH_TALENT";

export function getTalent() {
  return async function (dispatch) {
    try {
      let response = await axios.get("planning.json");
      console.log(response.data);

      return dispatch({
        type: GET_TALENT,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function searchTalent(name) {
  return {
    type: SEARCH_TALENT,
    payload: name,
  };
}
