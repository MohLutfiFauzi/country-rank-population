import React from "react";
import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
    >
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sorry, the page you are looking for doesn’t exist.
      </Typography>
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleGoBack}>
        Go Back
      </Button>
    </Box>
  );
};

export default NotFoundPage;
