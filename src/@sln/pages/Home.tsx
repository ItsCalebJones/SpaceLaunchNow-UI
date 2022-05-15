// src/pages/Home.tsx
import React, {ReactElement, FC, useState} from "react";
import { Box, Button, Container, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@sln/styles/"
import {SLNTypography } from "@sln/components/SLNTypography"
import {
    Configuration,
    PaginatedLaunchSerializerCommonList,
    LaunchApi,
    BASE_PATH,
    LaunchSerializerCommon,
} from "@sln/services/api";
  
import bgImage from "@sln/assets/images/header_starship.jpg";
import launcher from "@sln/assets/images/launcher_full.png";

const urlBgImage = `url(${bgImage})`

{/* TODO: Find a way to generalize the gradient/css style for future use. */}
const useStyles = makeStyles()((theme: Theme) => ({
  header: {
    backgroundImage: `-webkit-linear-gradient(135deg,rgba(71,85,97,0.55) 0,rgba(82,116,170,0.31) 100%),${urlBgImage};
    background-image: linear-gradient(135deg,rgba(71,85,97,0.55) 0,rgba(82,116,170,0.31) 100%), ${urlBgImage}`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    display: "grid",
    placeItems: "center",
    minHeight: "65vh",
    width: "100%",
  }
}))
  

const Home: FC<any> = (): ReactElement => {

  const { classes } = useStyles()
  const configuration = new Configuration({
      basePath: BASE_PATH,
    });
  
    const launchApi = new LaunchApi(configuration);
  
    const [launches, setLaunches] =
      useState<PaginatedLaunchSerializerCommonList | null>(null);
  
    const onClick = async () => {
      const loadedPosts = await launchApi.launchUpcomingList();
      setLaunches(loadedPosts);
    };
    
    return (
      <Box
        className={classes.header}
      >
        <Grid
          container
          direction={"column"}
          justifyContent="center"
          alignItems="center">
          <Grid item>

            {/* TODO: Find a way to generalize this css style for future use. */}
            <img src={launcher} height={200} width={200} style={{
              borderRadius: "50%",
              boxShadow: "0 16px 38px -12px rgb(0 0 0 / 56%), 0 4px 25px 0 rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)"
            }} />
          </Grid>
          <Grid item>
              <SLNTypography kind="boldTitle">Space Launch Now</SLNTypography>
          </Grid>
          <Grid item>
              <Button 
                variant="contained"
                onClick={(e) => onClick()}
                >
              Get Launches
            </Button>
          </Grid>
          <Grid item>
          {launches && <LaunchItemList launches={launches.results!} />}
          </Grid>
        </Grid>
      </Box>
    );
};

const LaunchItemList = ({
    launches,
  }: {
    launches: LaunchSerializerCommon[];
  }) => (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>userId</th>
          <th>title</th>
        </tr>
      </thead>
      <tbody>
        {launches.map(({ id, name, net, status }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{net?.toDateString()}</td>
            <td>{status?.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

export default Home;