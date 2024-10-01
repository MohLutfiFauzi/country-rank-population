import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuItem from "@mui/material/MenuItem";
import Logo from "@/assets/Logo.svg";
import { useColorScheme, styled } from "@mui/material/styles";

export default function Navbar() {
  const pages = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Compare Country",
      link: "/compare-country",
    },
    {
      label: "News",
      link: "/news",
    },
  ];

  const { mode, setMode } = useColorScheme();

  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              display: { sm: "block" },
            }}
          >
            <NavLink to={"/"}>
              <img src={Logo} width="30px" alt="logo megazine" />
            </NavLink>
          </Typography>

          {pages.map((page, index) => (
            <StyledMenuItem key={index}>
              <NavLink
                to={page.link}
                className={({ isActive }) => (isActive ? "active" : "")}
                sx={{ textAlign: "center" }}
              >
                {page.label}
              </NavLink>
            </StyledMenuItem>
          ))}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ marginLeft: "10px" }}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const StyledMenuItem = styled(MenuItem)(() => ({
  "& .active": {
    borderBottom: "1px solid white",
  },
}));
