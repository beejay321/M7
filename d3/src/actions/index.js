export const addToFavAction = (company) => {
  return {
    type: "ADD_TO_FAV",
    payload: company,
  };
};

export const removeFromFavAction = (company) => {
  return {
    type: "REMOVE_FROM_FAV",
    payload: company,
  };
};

export const getJobsAction = () => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      let response = await fetch(`https://remotive.io/api/remote-jobs?limit=20`);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        console.log(data.jobs);
        let jobs = data.jobs;
        dispatch({
          type: "GET_JOBS",
          payload: jobs,
        });
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
      } else {
        console.log("there is an error");
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }
  };
};
