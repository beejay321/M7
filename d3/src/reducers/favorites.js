import { initialState } from "../store";

const favoritesReducer = (state = initialState.favorites, action) => {
  console.log(action, state);
  switch (action.type) {
    case "ADD_TO_FAV":
      return {
        ...state,

        company: [...state.company, action.payload], // THIS IS VALID
      };
    case "REMOVE_FROM_FAV":
      return {
        ...state,

        company: state.company.filter((company) => company !== action.payload), // THIS IS VALID
      };
    default:
      return state;
  }
};

export default favoritesReducer;
