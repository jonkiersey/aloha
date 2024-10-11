import { Box, Button, styled } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import ConstructionIcon from "@mui/icons-material/Construction";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import EmailIcon from "@mui/icons-material/Email";
import { sizes } from "@constants";
import { ReactElement, ReactNode } from "react";

const HeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: sizes.headerHeight,
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  overflowX: "auto",
  zIndex: 1000,
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
    </HeaderContainer>
  );
};

export default Header;
