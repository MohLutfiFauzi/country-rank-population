import React from "react";
import CardRight from "./CardRigth";
import Grid from "@mui/material/Grid2";

const ListCardRight = ({ articles }) => {
  return (
    <Grid size={{ xs: 12, md: 6 }}>
      {articles.map((article, index) => (
        <CardRight article={article} key={index} />
      ))}
    </Grid>
  );
};

export default ListCardRight;
