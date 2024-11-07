import { Box, Button, FormControlLabel, styled } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { sizes } from "@constants";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Switch } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NightlightIcon from "@mui/icons-material/Nightlight";

const HeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: sizes.headerHeight,
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

const NavLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  overflowX: "auto",
  gap: 8,
  position: "relative",
}));

const OverflowFade = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  width: 32,
  pointerEvents: "none", // Ensure it doesn't interfere with scrolling
}));

const OverflowRightFade = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  width: 32,
  pointerEvents: "none", // Ensure it doesn't interfere with scrolling
  background: `linear-gradient(to left, ${theme.palette.primary.main}, transparent)`,
  zIndex: 1,
}));

const OverflowLeftFade = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  width: 32,
  pointerEvents: "none", // Ensure it doesn't interfere with scrolling
  background: `linear-gradient(to right, ${theme.palette.primary.main}, transparent)`,
  zIndex: 1,
}));

const NavButton = styled(Button)(({ theme }) => ({
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
  const navLinksRef = useRef<HTMLDivElement>(null);
  const [isOverflowingLeft, setIsOverflowingLeft] = useState(false);
  const [isOverflowingRight, setIsOverflowingRight] = useState(false);
  console.log("overflowing", { isOverflowingLeft, isOverflowingRight });

  useEffect(() => {
    const checkOverflow = () => {
      if (navLinksRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = navLinksRef.current;
        console.log("navLinksRef", { scrollLeft, scrollWidth, clientWidth });
        setIsOverflowingLeft(scrollLeft > 0);
        setIsOverflowingRight(scrollLeft + clientWidth < scrollWidth);
      }
    };

    checkOverflow(); // Check on mount
    window.addEventListener("resize", checkOverflow); // Check on resize
    navLinksRef.current?.addEventListener("scroll", checkOverflow); // Check on scroll

    return () => {
      window.removeEventListener("resize", checkOverflow);
      navLinksRef.current?.removeEventListener("scroll", checkOverflow);
    };
  }, [navLinksRef.current]);

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
        {isOverflowingLeft && <OverflowLeftFade />}
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
        {isOverflowingRight && <OverflowRightFade />}
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
