import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Box } from "@mui/material";
import CardCategory from "./CardCategory";

const ListCardCategory = ({ articles }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        Lastest Articles
      </Typography>
      <Grid container spacing={2}>
        {articles.map((article, index) => (
          <Grid size={{ xs: 12, md: 4, lg: 3 }} key={index}>
            <CardCategory article={article} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ListCardCategory;
