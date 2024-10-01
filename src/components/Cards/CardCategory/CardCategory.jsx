import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import { dateNews } from "@/utils";

const CardCategory = ({ article }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={
          article?.multimedia[0]?.url
            ? `https://static01.nyt.com/${article.multimedia[0].url}`
            : ""
        }
        alt="NY Times Image"
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ mb: 1 }}>
          <Typography variant="body2" fontWeight="bold">
            {article?.byline?.original || "-"}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {article?.source || "-"}
          </Typography>
        </Box>
        <Link to={article?.web_url} target="_blank">
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{
              "&:hover": {
                color: "#1E90FF",
              },
            }}
          >
            {article?.headline?.main || "-"}
          </Typography>
        </Link>
        <Box sx={{ display: "flex", mt: 1, gap: 1 }}>
          <Typography variant="body2" color="textSecondary">
            {article?.section_name ? `${article?.section_name}  | ` : ""}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {dateNews(article?.pub_date)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardCategory;
