import { actionType } from "./action";

const initialState = {
  isLoading: false,
  articles: [],
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case actionType.SET_ARTICLES:
      return {
        ...state,
        articles: payload,
      };
    case actionType.SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    default: {
      return state;
    }
  }
};
