import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: {
          main: "#1976d2",
        },
        secondary: {
          main: "#757575",
        },
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: {
          main: "#1976d2",
        },
        secondary: {
          main: "#929292",
        },
      },
    },
  },
});

export default theme;
