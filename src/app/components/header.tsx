import { Box, Button, FormControlLabel, styled } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { sizes } from "@constants";
import { ReactNode } from "react";
import { Switch } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const HeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: sizes.headerHeight,
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  overflowX: "auto",
  zIndex: 1000,
  display: "flex",
}));

const HeaderContent = styled(Box)({
  display: "flex",
  minWidth: "fit-content",
  gap: 8,
});

const NavButton = styled(Button)(({ theme }) => ({
  gap: 8,
  color: theme.palette.primary.contrastText,
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));
const SelectedNavButton = styled(NavButton)(({ theme }) => ({
  color: theme.palette.primary.light,
  backgroundColor: theme.palette.primary.dark,
}));

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  marginLeft: "auto",
}));

const LabelIconContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const NavLink = ({
  children,
  isCurrentTab,
  onClick,
}: {
  children: ReactNode;
  isCurrentTab?: boolean;
  onClick: () => void;
}) => {
  const NavComponent = isCurrentTab ? SelectedNavButton : NavButton;
  return <NavComponent onClick={onClick}>{children}</NavComponent>;
};

export type HeaderProps = {
  routes: {
    route: string;
    Icon: React.ElementType;
    label: string;
  }[];
};

const Header = ({ routes }: HeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  const isDarkMode = mode === "dark";
  const toggleDarkMode = () => {
    setMode(isDarkMode ? "light" : "dark");
  };
  return (
    <HeaderContainer>
      <HeaderContent>
        {routes.map(({ route, Icon, label }) => (
          <NavLink
            isCurrentTab={pathname === route}
            key={route}
            onClick={() => router.push(route)}
          >
            <Icon />
            {label}
          </NavLink>
        ))}
      </HeaderContent>
      <StyledFormControlLabel
        control={
          <Switch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            color="default"
          />
        }
        label={
          <LabelIconContainer>
            {isDarkMode ? <Brightness7Icon /> : <Brightness3Icon />}
          </LabelIconContainer>
        }
        aria-label="Dark Mode Switch"
      />
    </HeaderContainer>
  );
};

export default Header;
