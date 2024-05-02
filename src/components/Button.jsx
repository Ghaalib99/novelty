import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  transitions: {
    duration: {
      shortest: 150, // Adjust duration as needed
    },
    easing: {
      standard: "ease", // Adjust easing function as needed
    },
  },
});

const CustomButton = ({ transparent }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        className={
          (transparent
            ? "bg-white text-gray-800 active:bg-gray-100"
            : "bg-primary text-white active:bg-warning") +
          " text-xs font-bold uppercase m-3 p-3 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
        }
        variant="contained"
        type="button"
        sx={{
          transition: "background-color 150ms ease",
          "&:hover": {
            backgroundColor: transparent ? "#eeeeee" : "#f9a825",
          },
        }}
      >
        Login
      </Button>
    </ThemeProvider>
  );
};

export default CustomButton;
