"use client";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Header from "./common/header";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <main>
          <ThemeProvider theme={theme}>
            <Header />
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
