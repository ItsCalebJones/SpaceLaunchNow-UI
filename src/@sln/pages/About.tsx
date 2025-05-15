// src/pages/Home.tsx

import React, { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";
import BaseLayout from "@sln/components/BaseLayout";

const About: FC<any> = (): ReactElement => {
  return (
    <BaseLayout>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "whitesmoke",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">About</Typography>
      </Box>
    </BaseLayout>
  );
};

export default About;
