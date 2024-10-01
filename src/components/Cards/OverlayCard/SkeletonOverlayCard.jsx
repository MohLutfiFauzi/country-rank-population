import React from "react";
import Grid from "@mui/material/Grid2";
import { Card, Box, Skeleton } from "@mui/material";

const SkeletonOverlayCard = () => (
  <Grid container spacing={2}>
    {Array(2)
      .fill()
      .map((_, index) => (
        <Grid size={{ xs: 12, md: 6 }} key={index}>
          <Card
            sx={{
              position: "relative",
              borderRadius: 2,
              overflow: "hidden",
              height: "300px",
            }}
          >
            <Skeleton variant="rectangular" width="100%" height="100%" />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "16px",
              }}
            >
              <Skeleton variant="text" sx={{ fontSize: "24px" }} />
              <Skeleton variant="text" sx={{ fontSize: "16px" }} />
            </Box>
          </Card>
        </Grid>
      ))}
  </Grid>
);

export default SkeletonOverlayCard;
