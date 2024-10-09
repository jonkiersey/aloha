import { Box, Button, ButtonOwnProps, styled } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const HeaderBox = styled(Box)({
  display: "flex",
});

type NavLinkProps = ButtonOwnProps & { active?: boolean };

const NavLink = styled(Button)<NavLinkProps>(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  backgroundColor: active ? theme.palette.action.selected : "transparent",
  "&:hover": {
    backgroundColor: active
      ? theme.palette.action.hover
      : theme.palette.action.hover,
  },
}));

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <HeaderBox>
      <NavLink active={pathname === "/"} onClick={() => router.push("/")}>
        Home
      </NavLink>
      <NavLink
        active={pathname === "/about"}
        onClick={() => router.push("/about")}
      >
        About
      </NavLink>
      <NavLink
        active={pathname === "/contact"}
        onClick={() => router.push("/contact")}
      >
        Contact
      </NavLink>
    </HeaderBox>
  );
};

export default Header;
