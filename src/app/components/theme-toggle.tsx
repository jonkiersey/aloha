import { Switch, styled } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

const StyledSwitch = styled(Switch)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const ThemeToggle = () => {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  const isDarkMode = mode === "dark";
  const toggleDarkMode = () => {
    setMode(isDarkMode ? "light" : "dark");
  };
  return (
    <Switch checked={isDarkMode} onChange={toggleDarkMode} color="default" />
  );
};

export default ThemeToggle;
