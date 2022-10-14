import {
  SEARCH_TALENT,
  GET_TALENT,
  MOVE_CONTENT,
  FILTER_BY_CITY,
  FILTER_BY_BOOKING,
  FILTER_BY_INDUSTRY,
  SELECTION_BY_SKILLS,
  FILTER_BY_SKILLS,
  FILTER_BY_OU,
  CURRENT_CITY,
  CLEAN_SEARCH,
} from "./actions";
import Swal from "sweetalert2";

const initialState = {
  talent: [],
  talentCopy: [],
  drawer: false,
  currentCity: [],
  person: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TALENT:
      // console.log("Talent => " + state.talent);
      return {
        ...state,
        talent: action.payload,
        talentCopy: action.payload,
      };

    case MOVE_CONTENT:
      return {
        ...state,
        drawer: action.payload,
      };

    case CURRENT_CITY:
      let city = action.payload;
      let cityId = state.talent.filter((t) => t.officeCity == city);
      return {
        ...state,
        currentCity: cityId,
      };

    case SEARCH_TALENT:
      let name = action.payload;
      console.log(name);
      let search = state.talent.filter((talent) =>
        talent.talentName.toLowerCase().includes(name.toLowerCase())
      );
      if (search.length == 0) {
        search = state.talent.filter((talent) => talent.id == name);
      }
      if (search.length == 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Sorry, we currently don't have any talent matching that name or id :(",
        });
      }

      return {
        ...state,
        person: search,
      };

    // case CLEAN_SEARCH:
    //   return {
    //     ...state,
    //     person: [],
    //   };

    case FILTER_BY_CITY:
      return {
        ...state,
        talent: [],
      };

    case FILTER_BY_BOOKING:
      return {
        ...state,
        talent: [],
      };

    case FILTER_BY_INDUSTRY:
      return {
        ...state,
        talent: [],
      };

    case SELECTION_BY_SKILLS:
      return {
        ...state,
        talent: [],
      };

    case FILTER_BY_SKILLS:
      return {
        ...state,
        talent: [],
      };

    case FILTER_BY_OU:
      return {
        ...state,
        talent: [],
      };

    case FILTER_BY_INDUSTRY:
      return {
        ...state,
        talent: [],
      };

    default:
      return state;
  }
}

export default rootReducer;

// case SEARCH_TALENT:
//   let name = action.payload;
//   let allTalents = state.talentCopy;
//   let filteredTalent = [];
//   console.log(allTalents.length);
//   filteredTalent = state.allTalents.filter((t) => t.id == name);
//   if (filteredTalent.length == 0) {
//     filteredTalent = state.allTalents.filter((t) =>
//       t.talentName.toLowerCase().includes(name.toLowerCase())
//     );
//   }
//   if (filteredTalent.length == 0) {
//     return Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "We don't have any talent with that info :(",
//     });
//   }

//   console.log(filteredTalent);
//   return {
//     ...state,
//     talent: action.payload,
//   };
