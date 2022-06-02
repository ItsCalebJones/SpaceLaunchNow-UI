// src/pages/Home.tsx
import React, { ReactElement, FC, useState } from "react";
import {
  Box,
  Grid,
  Link,
  Theme,
} from "@mui/material";
import { makeStyles } from "@sln/styles/";
import { SLNTypography } from "@sln/components/SLNTypography";
import {
  Configuration,
  PaginatedLaunchSerializerCommonList,
  LaunchApi,
  BASE_PATH,
  LaunchSerializerCommon,
} from "@sln/services/api";

import bgImage from "@sln/assets/images/header_starship.jpg";
import launcher from "@sln/assets/images/launcher_full.png";

import appleMarketing from "@sln/assets/images/button/apple.png";
import googleMarketing from "@sln/assets/images/button/google.png";

import HR from "../utils/HorizontalRule";

const urlBgImage = `url(${bgImage})`;

{
  /* TODO: Find a way to generalize the gradient/css style for future use. */
}
const useStyles = makeStyles()((theme: Theme) => ({
  header: {
    backgroundImage: `-webkit-linear-gradient(135deg,rgba(71,85,97,0.55) 0,rgba(82,116,170,0.31) 100%), ${urlBgImage};
    background-image: linear-gradient(135deg,rgba(71,85,97,0.55) 0,rgba(82,116,170,0.31) 100%), ${urlBgImage}`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    display: "grid",
    placeItems: "center",
    minHeight: "75vh",
    width: "100%",
  },
  image: {
    marginTop: "100px",
    borderRadius: "50%",
    boxShadow:
      "0 16px 38px -12px rgb(0 0 0 / 56%), 0 4px 25px 0 rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)",
  },
  textShadow:{
    filter: "drop-shadow(#00000059 2px 2px 4px)",
  }
}));

const HeaderIcon: FC<any> = (): ReactElement => {
  const { classes } = useStyles();
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
    <Box data-test="header-image-bg" className={classes.header}>
      <Grid
        container
        xs={10}
        item={true}
        direction={"column"}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          {/* TODO: Find a way to generalize this css style for future use. */}
          <img
            src={launcher}
            data-test="header-image-logo"
            height={250}
            width={250}
            className={classes.image}
          />
        </Grid>
        <Grid item>
          <Grid item>
            <HR />
          </Grid>
          <Grid
            container
            direction={"column"}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid item>
              <SLNTypography
                data-test="header-image-title"
                kind="boldTitleWhite"
                className={classes.textShadow}
              >
                Space Launch Now
              </SLNTypography>
            </Grid>
            <Grid item>
              <SLNTypography
                data-test="header-image-subtitle"
                kind="subTitleWhite"
                className={classes.textShadow}
              >
                Spaceflight News and Events
              </SLNTypography>
            </Grid>
            <Grid
              container
              direction={"row"}
              spacing={2}
              justifyContent="center"
              alignItems="center"
              style={{ marginTop: "5px" }}
            >
              <Grid item>
                <Link href="https://itunes.apple.com/us/app/space-launch-now/id1399715731">
                  <img src={appleMarketing} width={135} height={40} />
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://play.google.com/store/apps/details?id=me.calebjones.spacelaunchnow&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                  <img src={googleMarketing} width={135} height={40} />
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid item mb={10}>
            <HR />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeaderIcon;
