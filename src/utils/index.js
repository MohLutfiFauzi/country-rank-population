import moment from "moment";
function createData(no, country, code, population, idd, flag) {
  return { no, country, code, population, idd, flag };
}

const formatPopulation = (num) => {
  switch (true) {
    case num >= 1_000_000_000:
      return (num / 1_000_000_000).toFixed(1) + "B";
    case num >= 1_000_000:
      return (num / 1_000_000).toFixed(1) + "M";
    case num >= 1_000:
      return (num / 1_000).toFixed(1) + "K";
    default:
      return num;
  }
};

const dateNews = (date) => {
  if (!date) {
    return "-";
  }
  return moment(date).format("ll"); // Sep 29, 2024
};

export { createData, formatPopulation, dateNews };
