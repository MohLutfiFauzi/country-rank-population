import { createData, formatPopulation } from "@/utils";
import api from "@/utils/api";

export const actionType = {
  SET_COUNTRIES: "SET_COUNTRIES",
  SET_LOADING: "SET_LOADING",
  SET_COMPARE_CONTRIES: "SET_COMPARE_CONTRIES",
};

function setIsLoading(payload) {
  return {
    type: actionType.SET_LOADING,
    payload,
  };
}

function setCountries(payload) {
  return {
    type: actionType.SET_COUNTRIES,
    payload,
  };
}

function setCompareCountries(payload) {
  return {
    type: actionType.SET_COMPARE_CONTRIES,
    payload,
  };
}

function fetchCountries() {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const response = await api.getCountries();
      const formattedData = response
        .sort((a, b) => b.population - a.population)
        .map((country, index) =>
          createData(
            index + 1,
            country.name.common,
            country.cca2,
            formatPopulation(country.population),
            `${country.idd.root}${country.idd.suffixes[0] || ""}`,
            country.flags.svg
          )
        );
      dispatch(setCountries(formattedData));
    } catch (error) {
      new Error(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
}

function fetchCompareCountries(code1, code2) {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const response = await api.getCompareCountries(code1, code2);
      dispatch(setCompareCountries(response));
    } catch (error) {
      new Error(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
}

export { fetchCountries, fetchCompareCountries };
