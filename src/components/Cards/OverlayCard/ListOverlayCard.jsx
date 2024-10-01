import React from "react";
import Grid from "@mui/material/Grid2";
import OverlayCard from "./OverlayCard";

const ListOverlayCard = ({ articles }) => {
  return (
    <Grid container spacing={2}>
      {articles.map((article, index) => (
        <Grid size={{ xs: 12, md: 6 }} key={index}>
          <OverlayCard article={article} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListOverlayCard;
