import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export default createTheme({
  palette: {
    secondary: {
      light: grey[400],
      main: grey[600],
      dark: grey[800],
      contrastText: grey[100],
    },
  },
});
