import axios from "axios";
import Swal from "sweetalert2";

export const GET_TALENT = "GET_TALENT";
export const SEARCH_TALENT = "SEARCH_TALENT";
export const MOVE_CONTENT = "MOVE_CONTENT";
export const FILTER_BY_CITY = "FILTER_BY_CITY";
export const FILTER_BY_BOOKING = "FILTER_BY_BOOKING";
export const FILTER_BY_INDUSTRY = "FILTER_BY_INDUSTRY";
export const FILTER_BY_SKILLS = "FILTER_BY_SKILLS";
export const SELECTION_BY_SKILLS = "SELECTION_BY_SKILLS";
export const FILTER_BY_OU = "FILTER_BY_OU";
export const CURRENT_CITY = "CURRENT_CITY";
export const CURRENT_INDUSTRY = "CURRENT_INDUSTRY";
export const CLEAN_SEARCH = "CLEAN_SEARCH";

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

export function moveContent(boolean) {
  return {
    type: MOVE_CONTENT,
    payload: boolean,
  };
}

export function currentCity(payload) {
  return {
    type: CURRENT_CITY,
    payload,
  };
}
export function currentIndustry(payload) {
  return {
    type: CURRENT_INDUSTRY,
    payload,
  };
}

export function cleanSearch() {
  return {
    type: CLEAN_SEARCH,
  };
}

export function filterByCity(payload) {
  return {
    type: FILTER_BY_CITY,
    payload,
  };
}
export function filterByBooking(payload) {
  return {
    type: FILTER_BY_BOOKING,
    payload,
  };
}
export function filterBySkills(payload) {
  return {
    type: FILTER_BY_SKILLS,
    payload,
  };
}
export function selectionBySkills(payload) {
  return {
    type: SELECTION_BY_SKILLS,
    payload,
  };
}
export function filterByOpUnit(payload) {
  return {
    type: FILTER_BY_OU,
    payload,
  };
}
export function filterByIndustry(payload) {
  return {
    type: FILTER_BY_INDUSTRY,
    payload,
  };
}
