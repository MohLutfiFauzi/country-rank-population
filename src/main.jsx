import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import stories from "@/stories";
import { Provider } from "react-redux";
import { GlobalStyles } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// pages
import Home from "@/pages/Home";
import News from "@/pages/News";
import NotFound from "@/pages/NotFound";
import CompareCountry from "@/pages/CompareCountry";
import ResultsCompare from "@/pages/ResultsCompare";

// components
import Template from "@/components/Template";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
});

// Global styles
const globalStyles = (
  <GlobalStyles
    styles={{
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      body: {
        fontFamily: "Open Sans, sans-serif",
        lineHeight: 1.6,
        maxWidth: "1440px",
        margin: "auto",
      },
      a: {
        textDecoration: "none",
        color: "inherit",
      },
      img: {
        maxWidth: "100%",
        height: "auto",
      },
    }}
  />
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "compare-country",
        children: [
          {
            index: true,
            element: <CompareCountry />,
          },
          {
            path: ":code1/n/:code2",
            element: <ResultsCompare />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={stories}>
      <ThemeProvider theme={theme}>
        {globalStyles}
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
