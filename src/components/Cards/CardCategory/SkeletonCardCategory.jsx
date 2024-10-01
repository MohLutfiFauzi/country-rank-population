import React from "react";
import Grid from "@mui/material/Grid2";

import { Skeleton, Card, CardContent, Typography, Box } from "@mui/material";

const SkeletonCardCategory = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        Lastest Articles
      </Typography>
      <Grid container spacing={2}>
        {Array(4)
          .fill()
          .map((_, index) => (
            <Grid size={{ xs: 12, md: 4, lg: 3 }} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Skeleton variant="rectangular" width="100%" height={140} />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ mb: 1 }}>
                    <Skeleton variant="text" width="200px" />
                    <Skeleton variant="text" width="150px" />
                  </Box>
                  <Skeleton variant="text" width="250px" />
                  <Skeleton variant="text" width="100px" />
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default SkeletonCardCategory;
