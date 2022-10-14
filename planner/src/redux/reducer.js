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
  CURRENT_INDUSTRY,
  CLEAN_SEARCH,
} from "./actions";
import Swal from "sweetalert2";

const initialState = {
  talent: [],
  talentCopy: [],
  drawer: false,
  currentCity: [],
  currentIndustry: [],
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

    case CURRENT_INDUSTRY:
      let industry = action.payload;
      let indId = state.talent.filter((t) => t.industry == industry);
      return {
        ...state,
        currentIndustry: indId,
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

    case CLEAN_SEARCH:
      return {
        ...state,
        person: [],
      };

    case FILTER_BY_CITY:
      let cityFilter = action.payload;
      let filteredCity = [];
      if (cityFilter !== "all") {
        filteredCity = state.talentCopy.filter(
          (t) => t.officeCity.toLowerCase() == cityFilter.toLowerCase()
        );
      }
      return {
        ...state,
        person: filteredCity,
      };

    case FILTER_BY_BOOKING:
      let bgFilter = action.payload;
      console.log(bgFilter);
      let filteredBg = [];
      if (bgFilter !== "all") {
        filteredBg = state.talentCopy.filter(
          (t) => t.bookingGrade.toLowerCase() == bgFilter.toLowerCase()
        );
      }
      return {
        ...state,
        person: filteredBg,
      };

    case FILTER_BY_SKILLS:
      let lang = action.payload;
      let filteredLang = [];
      if (lang !== "all") {
        filteredLang = state.talentCopy.filter((x) =>
          x.requiredSkills.map((y) => y.name.toLowerCase()).includes(lang)
        );
      }
      return {
        ...state,
        person: filteredLang,
      };

    case FILTER_BY_INDUSTRY:
      let indFilter = action.payload;
      let filteredInd = [];
      if (indFilter !== "all") {
        filteredInd = state.talentCopy.filter(
          (t) => t.industry.toLowerCase() == indFilter.toLowerCase()
        );
      }

      return {
        ...state,
        person: filteredInd,
      };

    case FILTER_BY_OU:
      let ouFilter = action.payload;
      let filteredOu = [];
      if (ouFilter !== "all") {
        filteredOu = state.talentCopy.filter(
          (t) => t.operatingUnit.toLowerCase() == ouFilter.toLowerCase()
        );
      }

      return {
        ...state,
        person: filteredOu,
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
