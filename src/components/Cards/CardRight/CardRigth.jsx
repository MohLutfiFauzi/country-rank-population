import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { dateNews } from "@/utils";

const CardRight = ({ article }) => (
  <Card sx={{ display: "flex", mb: 2 }}>
    <CardContent sx={{ flex: 1 }}>
      <Link to={article?.web_url} target="_blank">
        <Typography
          variant="body1"
          sx={{
            "&:hover": {
              color: "#1E90FF",
            },
          }}
        >
          {article?.headline?.main || "-"}
        </Typography>
      </Link>
      <Typography variant="body2" color="textSecondary">
        {article?.section_name ? `${article?.section_name} | ` : ""}
        {dateNews(article?.pub_date)}
      </Typography>
    </CardContent>
    <CardMedia
      component="img"
      sx={{ width: 150 }}
      image={
        article?.multimedia[0]?.url
          ? `https://static01.nyt.com/${article.multimedia[0].url}`
          : ""
      }
      alt="NY Times Image"
    />
  </Card>
);

export default CardRight;
