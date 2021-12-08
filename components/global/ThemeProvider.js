import React from "react";
import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#223059",
      light: "#354B8C",
    },
    secondary: {
      main: "#bc0f28",
      light: "#EF1837",
    },
  },
});

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
