// src/pages/Home.tsx
import React, {ReactElement, FC, useState} from "react";
import { Box, Button, Container, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@sln/styles/"
import HeaderImage from "@sln/components/utils/HeaderImage";

const useStyles = makeStyles()((theme: Theme) => ({

}))

const Home: FC<any> = (): ReactElement => {

  const { classes } = useStyles()

    
    return (
      <Box>
        <Grid
          container
          direction={"column"}
          justifyContent="center"
          alignItems="center">
          <Grid container item>
            <HeaderImage/>
          </Grid>
        </Grid>
      </Box>
    );
};

export default Home;