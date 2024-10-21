import { Box, styled, Typography } from "@mui/material";

const SideBarInfoItemBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

const ChildrenContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

type Props = {
  children: React.ReactNode;
  title: string;
};

const SideBarInfoItem = ({ children, title }: Props) => {
  return (
    <SideBarInfoItemBox>
      <Typography fontWeight="bold" variant="subtitle1">
        {title}
      </Typography>
      <ChildrenContainer>{children}</ChildrenContainer>
    </SideBarInfoItemBox>
  );
};

export default SideBarInfoItem;
