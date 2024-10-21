import { Box, Link, styled, Typography } from "@mui/material";

const InfoWithLink = styled(Link)(({ theme }) => ({
  color: theme.palette.getContrastText(theme.palette.grey[800]),
  display: "flex",
  alignItems: "center",
  gap: 8,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const Info = styled(Box)({
  alignItems: "center",
  display: "flex",
  gap: 8,
});

export type Props = {
  Icon: React.ElementType;
  text: string;
  href?: string;
};
const ContactInfoItem = ({ Icon, text, href }: Props) => {
  const Component = href ? InfoWithLink : Info;
  return (
    <Component href={href} target="_blank">
      <Icon />
      <Typography variant="body2">{text}</Typography>
    </Component>
  );
};

export default ContactInfoItem;
