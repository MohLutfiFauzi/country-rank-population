import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Link, Box, styled } from "@mui/material";

const Footer = () => {
  return (
    <Container sx={{ p: 4 }}>
      <Typography variant="h6" gutterBottom>
        Global Population Insights at Your Fingertips
      </Typography>

      <Grid container justifyContent="space-between" sx={{ mt: 4 }}>
        <Grid>
          <Typography variant="body2">
            &copy; 2024, Contry Rank population. All rights reserved.
          </Typography>
        </Grid>
        <Grid>
          <Link href="#" color="inherit" underline="none">
            Privacy notice
          </Link>{" "}
          |{" "}
          <Link href="#" color="inherit" underline="none">
            Terms of condition
          </Link>{" "}
          |{" "}
          <Link href="#" color="inherit" underline="none">
            FAQ
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;

const Container = styled(Box)(({ theme }) => ({
  color: "#fff",
  backgroundColor: theme.palette.primary.main,
  ...theme.applyStyles("dark", {
    backgroundColor: "#272727",
  }),
}));
