import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography, CardMedia, Box } from "@mui/material";
import { dateNews } from "@/utils";

const OverlayCard = ({ article }) => (
  <Card
    sx={{
      position: "relative",
      borderRadius: 2,
      overflow: "hidden",
      height: "300px",
    }}
  >
    <CardMedia
      component="img"
      image={
        article?.multimedia[0]?.url
          ? `https://static01.nyt.com/${article.multimedia[0].url}`
          : ""
      }
      alt="NY Times Image"
    />
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        background:
          "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
        color: "white",
        padding: "16px",
      }}
    >
      <Typography variant="body2" color="inherit">
        {article?.section_name ? `${article?.section_name} | ` : ""}
        {dateNews(article?.pub_date)}
      </Typography>
      <Link to={article?.web_url} target="_blank">
        <Typography
          variant="h6"
          sx={{
            "&:hover": {
              color: "#1E90FF",
            },
          }}
        >
          {article?.headline?.main || "-"}
        </Typography>
      </Link>
    </Box>
  </Card>
);

export default OverlayCard;
