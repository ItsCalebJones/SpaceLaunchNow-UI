// src/pages/Home.tsx
import React, { ReactElement, FC, useState } from "react";
import {
  Grid,
  Theme,
  Card,
  Stack,
  CardActionArea,
  CardContent,
  Divider,
} from "@mui/material";
import { makeStyles } from "@sln/styles/";
import HeaderImage from "@sln/components/home/HeaderImage";
import Navbar from "@sln/components/Navbar";
import { SLNTypography } from "@sln/components/SLNTypography";
import LaunchList from "@sln/components/sidebar/LaunchList";
import HorizontalRule from "@sln/components/utils/HorizontalRule";
import SLNCountdown from "@sln/components/utils/SLNCountdown";
import { BASE_PATH, Configuration, LaunchApi, PaginatedLaunchSerializerCommonList } from "@sln/services/api";

const useStyles = makeStyles()((theme: Theme) => ({
  mainBody: {
    position: "absolute",
    top: 0,
    zIndex: -1,
  },
  // root: {
  //   display: "flex",
  //   flexDirection: "column",
  //   position: "relative",
  //   minWidth: 0,
  //   wordWrap: "break-word",
  //   backgroundColor: "#ffffff",
  //   backgroundClip: "border-box",
  //   // border: `0 solid ${rgba(black.main, 0.125)}`,
  //   borderRadius: "0.75",
  //   // boxShadow: '',
  //   overflow: "visible",
  // },

  altMedia: {
    backgroundSize: "cover",
    backgroundPosition: "top",
    minHeight: "100%",
    height: "100vh",
    position: "relative",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  /**
   * Max Card with for demo
   * same values used in Material-Ui Card Demos
   */
  card: {
    minHeight: 500,
  },

  /**
   * Applied to Orginal Card demo
   * Same vale used in Material-ui Card Demos
   */
  media: {
    height: 140,
  },

  /**
   * Demo stlying to inclrease text visibility
   * May verry on implementation
   */
  fiCardContent: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.24)",
  },
  fiCardContentTextSecondary: {
    color: "rgba(255,255,255,0.78)",
  },
}));

const Home: FC<any> = (): ReactElement => {
  const { classes } = useStyles();
  const bgImage =
    "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launcher_images/long2520march25202_image_20190222031200.jpeg";
  const urlBgImage = `url(${bgImage})`;

  const cardStyle = {
    minHeight: 500,
    backgroundImage: `${urlBgImage}`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };


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
  
  const countDownDate = Date.now() + 5000000;

  // TODO figure out how to stack these properly
  return (
    <>
      <Navbar transparent={true} />
      <Grid container className={classes.mainBody} direction={"column"}>
        <Grid container item>
          <HeaderImage />
        </Grid>
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            // backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            // backdropFilter: "saturate(200%) blur(30px)",
          }}
          style={{ display: "flex" }}
        >
          <Grid container>
            <Grid
              item
              xs={10}
              sm={10}
              md={8}
              justifyContent="center"
              alignItems="center"
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <SLNTypography kind="sectionTitle">
                  Next Upcoming Launch
                </SLNTypography>
                <Divider />
                <Card
                  sx={{
                    width: "85%",
                    minHeight: 500,
                    backgroundImage: `${urlBgImage}`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        mt={5}
                      >
                        <SLNTypography kind="sectionTitleWhite">
                          Falcon 9 Block 6 | Transporter 5
                        </SLNTypography>
                        <SLNCountdown date={countDownDate}/>
                        <SLNTypography kind="sectionTitleWhite">
                          May 25th, 2022 - 2:27 PM EDT
                        </SLNTypography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              justifyContent="center"
              alignItems="center"
            >
              <LaunchList />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </>
  );
};

export default Home;
