import React from "react";
import { useEffect } from "react";
import Divider from "@/components/Divider";
import Grid from "@mui/material/Grid2";
import ListCardRight from "@/components/Cards/CardRight/ListCardRight";
import ListOverlayCard from "@/components/Cards/OverlayCard/ListOverlayCard";
import ListCardCategory from "@/components/Cards/CardCategory/ListCardCategory";
import SkeletonCardCategory from "@/components/Cards/CardCategory/SkeletonCardCategory";
import SkeletonOverlayCard from "@/components/Cards/OverlayCard/SkeletonOverlayCard";
import SkeletonCardRight from "@/components/Cards/CardRight/SkeletonCardRight";
import {
  Skeleton,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { feetchArticles } from "../stories/news/action";
import { Link } from "react-router-dom";
import { dateNews } from "../utils";

function News() {
  const dispatch = useDispatch();
  const { articles, isLoading } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(feetchArticles("peace"));
  }, []);

  const sideArticles = articles?.slice(1, 4);
  const overlayArticles = articles?.slice(4, 6);
  const bottomArticles = articles?.slice(6, 10);

  return (
    <>
      <Grid container spacing={3} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          {isLoading ? (
            <Card sx={{ mb: 2 }}>
              <CardContent sx={{ flex: 1 }}>
                <Skeleton variant="text" sx={{ fontSize: "24px" }} />
                <Skeleton variant="text" width="150px" />
                <Skeleton variant="text" sx={{ fontSize: "1rem", mt: 2 }} />
              </CardContent>
              <Skeleton variant="rectangular" width="100%" height={270} />
            </Card>
          ) : (
            <Card sx={{ mb: 2 }}>
              <CardContent sx={{ flex: 1 }}>
                <Link to={articles[0]?.web_url} target="_blank">
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      "&:hover": {
                        color: "#1E90FF",
                      },
                    }}
                  >
                    {articles[0]?.headline?.main || "-"}
                  </Typography>
                </Link>
                <Typography variant="body2" color="textSecondary">
                  {articles[0]?.section_name
                    ? `${articles[0]?.section_name} | `
                    : ""}
                  {dateNews(articles[0]?.pub_date)}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }} noWrap>
                  {articles[0]?.abstract || "-"}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{
                  width: "100%",
                  height: "270px",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                image={
                  articles[0]?.multimedia[0]?.url
                    ? `https://static01.nyt.com/${articles[0].multimedia[0].url}`
                    : ""
                }
                alt="NY Times Image"
              />
            </Card>
          )}
        </Grid>
        {isLoading ? (
          <SkeletonCardRight />
        ) : (
          <ListCardRight articles={sideArticles} />
        )}
      </Grid>

      <Divider />
      {isLoading ? (
        <SkeletonOverlayCard />
      ) : (
        <ListOverlayCard articles={overlayArticles} />
      )}
      <Divider />

      {isLoading ? (
        <SkeletonCardCategory />
      ) : (
        <ListCardCategory articles={bottomArticles} />
      )}
      <Divider />
    </>
  );
}

export default News;
