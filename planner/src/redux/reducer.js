import { SEARCH_TALENT, GET_TALENT, MOVE_CONTENT } from "./actions";
import Swal from "sweetalert2";

const initialState = {
  talent: [],
  talentCopy: [],
  drawer: false,
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

    default:
      return state;
  }
}

export default rootReducer;
