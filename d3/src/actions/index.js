export const addToFavAction = (job) => {
  return {
    type: "ADD_TO_FAV",
    payload: job,
  };
};

export const removeFromFavAction = (index) => {
  return {
    type: "REMOVE_FROM_FAV",
    payload: index,
  };
};
