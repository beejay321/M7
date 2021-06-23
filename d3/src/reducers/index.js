import { initialState } from '../store'



 const mainReducer = (state = {initialState}, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        //   let favJobs = 
        return {
          ...state,
          company: {
            ...state.jobs,            
            favorites: [...state.company.favorites, action.payload], // THIS IS VALID            
          },
        };
      default:
        return state
    }
  }

  export default mainReducer
