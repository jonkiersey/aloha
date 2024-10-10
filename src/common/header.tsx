import { Box, Button, styled } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import EmailIcon from "@mui/icons-material/Email";
import { sizes } from "@constants";
import { ReactNode } from "react";

const HeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: sizes.headerHeight,
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  display: "flex",
  gap: 8,
  overflowX: "auto",
  zIndex: 1000,
}));

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

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <HeaderContainer>
      <NavLink isCurrentTab={pathname === "/"} onClick={() => router.push("/")}>
        <HomeIcon />
        Home
      </NavLink>
      <NavLink
        isCurrentTab={pathname === "/about"}
        onClick={() => router.push("/about")}
      >
        <InfoIcon />
        About
      </NavLink>
      <NavLink
        isCurrentTab={pathname === "/contact"}
        onClick={() => router.push("/contact")}
      >
        <EmailIcon />
        Contact
      </NavLink>
    </HeaderContainer>
  );
};

export default Header;
