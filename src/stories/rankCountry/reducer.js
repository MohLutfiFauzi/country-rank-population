import { actionType } from "./action";

const initialState = {
  isLoading: false,
  countries: [],
  compareCountries: [],
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case actionType.SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case actionType.SET_COUNTRIES:
      return {
        ...state,
        countries: payload,
      };
    case actionType.SET_COMPARE_CONTRIES:
      return {
        ...state,
        compareCountries: payload,
      };
    default: {
      return state;
    }
  }
};
