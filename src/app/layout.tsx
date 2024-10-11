"use client";
import { Box, ThemeProvider } from "@mui/material";
import theme from "../theme";
import { Footer, Header } from "@common";
import styled from "styled-components";
import { sizes } from "@constants";

const ContentContainer = styled(Box)({
  flexGrow: 1,
  marginTop: sizes.headerHeight,
  boxSizing: "border-box",
});

const PageContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body style={{ margin: 0, height: "100vh" }}>
        <main>
          <ThemeProvider theme={theme}>
            <PageContainer>
              <Header />
              <ContentContainer>{children}</ContentContainer>
              <Footer />
            </PageContainer>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
