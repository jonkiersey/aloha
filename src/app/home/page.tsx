"use client";
import { sizes } from "@constants";
import { Box, keyframes, styled, Typography } from "@mui/material";
import ApprovalCounter from "./approval-counter";
import useTypewriter from "@app/hooks/use-typewriter";
import { useEffect, useState } from "react";

const PageContainer = styled(Box)({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 16,
  boxSizing: "border-box",
});

const ContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  maxWidth: 600,
  marginTop: 128,
  [theme.breakpoints.down("sm")]: {
    marginTop: sizes.headerHeight,
  },
}));

const CenteredTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textAlign: "center",
}));

const NameTypography = styled(CenteredTypography)(({ theme }) => ({
  color: theme.palette.primary.dark,
}));

const FadeInContainer = styled(Box)({
  animation: `${keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
  }`} 2s`,
});

const Home = () => {
  const [canStartTyping, setCanStartTyping] = useState(false);

  const nameTypewriter = useTypewriter({
    canStart: canStartTyping,
    text: "Jon Kiersey",
    delay: 100,
  });

  const headlineTypewriter = useTypewriter({
    canStart: nameTypewriter.isFinished,
    text: "Full-Stack TypeScript Developer",
    delay: 50,
  });

  const descriptionTypewriter = useTypewriter({
    canStart: headlineTypewriter.isFinished,
    text: "This site is built in TypeScript using React with Next.js and MaterialUI. The source code can be found on my GitHub ",
    delay: 25,
  });

  const linkTypewriter = useTypewriter({
    canStart: descriptionTypewriter.isFinished,
    text: "here.",
    delay: 25,
    linkProps: {
      href: "https://github.com/jonkiersey/aloha",
      target: "_blank",
    },
  });

  console.log("worthless change to generate a new build");

  useEffect(() => {
    setCanStartTyping(true);
  }, []);

  return (
    <PageContainer>
      <ContentContainer>
        <NameTypography variant="h1">{nameTypewriter.element}</NameTypography>
        <CenteredTypography variant="h5">
          {headlineTypewriter.element}
        </CenteredTypography>
        <CenteredTypography variant="body1">
          {descriptionTypewriter.element}
          {linkTypewriter.element}
        </CenteredTypography>
        {linkTypewriter.isFinished && (
          <FadeInContainer>
            <ApprovalCounter />
          </FadeInContainer>
        )}
      </ContentContainer>
    </PageContainer>
  );
};

export default Home;
