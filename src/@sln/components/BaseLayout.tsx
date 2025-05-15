import React, { FC, ReactNode } from "react";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  transparent?: boolean;
}

const BaseLayout: FC<LayoutProps> = ({ children, transparent }) => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          minHeight: "100vh",
          maxWidth: "100vw",
          flexGrow: 1,
        }}
      >
        <Navbar transparent={transparent} />
        {children}
        <Footer />
      </Box>
    </>
  );
};

BaseLayout.defaultProps = {
  transparent: false,
};

export default BaseLayout;
