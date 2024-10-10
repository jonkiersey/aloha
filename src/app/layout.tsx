"use client";
import { Box, ThemeProvider } from "@mui/material";
import theme from "../theme";
import { Header } from "@common";
import styled from "styled-components";
import { sizes } from "@constants";

const PageContainer = styled(Box)({
  marginTop: sizes.headerHeight,
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <main>
          <ThemeProvider theme={theme}>
            <Header />
            <PageContainer>{children}</PageContainer>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
