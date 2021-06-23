export const addToFavAction = (company) => {
  return {
    type: "ADD_TO_FAV",
    payload: company,
  };
};

export const removeFromFavAction = (index) => {
  return {
    type: "REMOVE_FROM_FAV",
    payload: index,
  };
};
