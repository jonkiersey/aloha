import {
  Box,
  Button,
  FormControlLabel,
  styled,
  useColorScheme,
  Fade,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useCallback, useState } from "react";
import { Switch } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { sizes } from "@constants";

const HeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: sizes.headerHeight,
  paddingBottom: 4,
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1000,
  display: "flex",
}));

const NavLinksContainer = styled(Box)({
  display: "flex",
  flexGrow: 1,
  position: "relative",
  overflow: "hidden",
});

const NavLinks = styled(Box)({
  display: "flex",
  overflowX: "auto",
  gap: 8,
  position: "relative",
});

const OverflowFade = styled(Box)({
  position: "absolute",
  top: 0,
  bottom: 0,
  width: 48,
  pointerEvents: "none",
  zIndex: 1,
});

const OverflowRightFade = styled(OverflowFade)(({ theme }) => ({
  right: 0,
  background: `linear-gradient(to left, ${theme.palette.primary.main}, transparent)`,
}));

const OverflowLeftFade = styled(OverflowFade)(({ theme }) => ({
  left: 0,
  background: `linear-gradient(to right, ${theme.palette.primary.main}, transparent)`,
}));

const NavButton = styled(Button)(({ theme }) => ({
  borderRadius: "0 0 4px 4px",
  gap: 8,
  flexShrink: 0,
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
  const [isOverflowingLeft, setIsOverflowingLeft] = useState(false);
  const [isOverflowingRight, setIsOverflowingRight] = useState(false);

  const navLinksRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      const checkOverflow = () => {
        const { scrollLeft, scrollWidth, clientWidth } = node;
        setIsOverflowingLeft(scrollLeft > 0);
        setIsOverflowingRight(scrollLeft + clientWidth < scrollWidth);
      };
      checkOverflow(); // Check on mount
      node.addEventListener("scroll", checkOverflow);
      window.addEventListener("resize", checkOverflow);

      return () => {
        node.removeEventListener("scroll", checkOverflow);
        window.removeEventListener("resize", checkOverflow);
      };
    }
  }, []);

  if (!mode) {
    return null;
  }

  const isDarkMode = mode === "dark";
  const toggleDarkMode = () => {
    setMode(isDarkMode ? "light" : "dark");
  };
  return (
    <HeaderContainer>
      <NavLinksContainer>
        <Fade in={isOverflowingLeft}>
          <OverflowLeftFade />
        </Fade>
        <NavLinks ref={navLinksRef}>
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
        </NavLinks>
        <Fade in={isOverflowingRight}>
          <OverflowRightFade />
        </Fade>
      </NavLinksContainer>
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
            {isDarkMode ? <Brightness7Icon /> : <NightlightIcon />}
          </LabelIconContainer>
        }
        aria-label="Dark Mode Switch"
      />
    </HeaderContainer>
  );
};

export default Header;
