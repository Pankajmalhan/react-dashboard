import API from "../api/api";
export const FETCH_COUNT = "FETCH_COUNT";
export const FETCH_ITEM_REQUEST = "FETCH_ITEM_REQUEST";
export const FETCH_ITEM_FAILURE = "FETCH_ITEM_FAILURE";

const mapNameToApi = name => {
  if (name === "livescience") {
    return "posts";
  } else if (name === "space") {
    return "comments";
  } else {
    return "todos";
  }
};

export const dashboardClickHandler = name => {
  return dispatch => {
    dispatch({ type: FETCH_ITEM_REQUEST });

    const requestParam = mapNameToApi(name);

    API.get(requestParam)
      .then(res => {
        if (res.statusText === "OK") {
          dispatch({
            type: FETCH_COUNT,
            payload: res.data.length
          });
        }
      })
      .catch(err => {
        window.alert("Could Not Get , Please try again later", err);
        dispatch({ type: FETCH_ITEM_FAILURE });
      });
  };
};
