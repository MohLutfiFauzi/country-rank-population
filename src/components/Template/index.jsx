import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <Container>
      <Navbar />

      <Outlet />

      <Footer />
    </Container>
  );
};

export default Template;
