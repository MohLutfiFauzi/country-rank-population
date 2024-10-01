import api from "@/utils/api";

export const actionType = {
  SET_ARTICLES: "SET_ARTICLES",
  SET_LOADING: "SET_LOADING",
};
function setIsLoading(payload) {
  return {
    type: actionType.SET_LOADING,
    payload,
  };
}

function setArticles(payload) {
  return {
    type: actionType.SET_ARTICLES,
    payload,
  };
}

function feetchArticles(section) {
  return async (dispatch) => {
    dispatch(setIsLoading(true));

    try {
      const data = await api.getArticles(section);
      dispatch(setArticles(data));
    } catch (error) {
      new Error(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
}

export { feetchArticles };
