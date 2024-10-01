import { configureStore } from "@reduxjs/toolkit";
import rankCountry from "@/stories/rankCountry/reducer";
import news from "@/stories/news/reducer";

const store = configureStore({
  reducer: {
    rankCountry,
    news,
  },
});

export default store;
