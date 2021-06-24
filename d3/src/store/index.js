import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import favoritesReducer from "../reducers/favorites";
import jobsReducer from "../reducers/jobs";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  jobs: {
    searchResults: [],
    error: false,
    isLoading: false,
  },
  favorites: {
    company: [],
  },
};
const allReducers = combineReducers({
  jobs: jobsReducer,
  favorites: favoritesReducer,
});

const configureStore = () => createStore(allReducers, initialState, composeEnhancers(applyMiddleware(thunk)));

export default configureStore;
