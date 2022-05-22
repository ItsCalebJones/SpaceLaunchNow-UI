// src/pages/Home.tsx
import React, {ReactElement, FC, useState} from "react";
import { Box, Button, Container, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@sln/styles/"
import HeaderImage from "@sln/components/utils/HeaderImage";
import BaseLayout from "@sln/components/BaseLayout";
import Navbar from "@sln/components/Navbar";

const useStyles = makeStyles()((theme: Theme) => ({

  mainBody: {
    position: 'absolute',
    top: 0,
    zIndex: -1,
  }

}))

const Home: FC<any> = (): ReactElement => {

  const { classes } = useStyles()

  
  // TODO figure out how to stack these properly
  return (
    <Box>
      <Navbar transparent={true} />
        <Grid
          container
          className={classes.mainBody}
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