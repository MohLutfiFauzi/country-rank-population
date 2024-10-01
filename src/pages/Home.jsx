import React, { useEffect } from "react";
import Tables from "@/components/Tables";
import { useDispatch } from "react-redux";
import { fetchCountries } from "@/stories/rankCountry/action";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  return <Tables />;
}

export default Home;
