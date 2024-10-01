import React from "react";
import Grid from "@mui/material/Grid2";
import { Card, CardContent, Skeleton } from "@mui/material";
const SkeletonCardRight = () => {
  return (
    <Grid size={{ xs: 12, md: 6 }}>
      {Array(3)
        .fill()
        .map((_, index) => (
          <Card sx={{ display: "flex", mb: 2 }} key={index}>
            <CardContent sx={{ flex: 1 }}>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" width="50px" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" sx={{ fontSize: "0.7rem" }} />
            </CardContent>
            <Skeleton variant="rectangular" width="150px" height="auto" />
          </Card>
        ))}
    </Grid>
  );
};

export default SkeletonCardRight;
