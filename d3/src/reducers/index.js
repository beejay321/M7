import { initialState } from '../store'



 const mainReducer = (state = {initialState}, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        //   let favJobs = 
        return {
          ...state,
          favorites: {
            ...state.company,            
            company: [...state.favorites.company, action.payload], // THIS IS VALID            
          },
        };
      default:
        return state
    }
  }

  export default mainReducer
