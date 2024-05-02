import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";

import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0A2640",
      light: "#FFA800",
    },
    secondary: {
      main: "#64A001",
      light: "#FCF0DC",
    },
  },
  typography: {
    fontFamily: "Lexend",
    h1: {
      fontSize: "4rem",
    },
    h2: {
      fontSize: "3.5rem",
    },
    h3: {
      fontSize: "3rem",
    },
    body1: {
      fontSize: "1.4rem",
      fontWeight: 300,
    },

    body2: {
      fontSize: "1rem",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
