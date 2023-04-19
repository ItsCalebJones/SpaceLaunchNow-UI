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
import SLNCountdown from "@sln/components/utils/SLNCountdown";
import { LaunchDetailed } from "@sln/service/model";
import { useLaunchUpcomingList } from "@sln/service/api/launch/launch";
import { HorizontalRule } from "@mui/icons-material";
import { date_builder } from "@sln/components/utils/FunctionUtils";
import { margin } from "@mui/system";

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

  const { data: launches, isLoading } = useLaunchUpcomingList({limit: 1, hide_recent_previous: true});

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
              xs={12}
              sm={12}
              md={9}
              justifyContent="center"
              alignItems="center"
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid container xs={10} spacing={2}>
                  <Grid item xs={12} textAlign="center">
                    <SLNTypography kind="sectionTitle">
                      Next Upcoming Launch
                    </SLNTypography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider 
                    variant="fullWidth" 
                    sx={{
                      borderTop: "1px solid rgba(0,0,0,0.1)"
                    }}/>
                  </Grid>
                </Grid>

                {launches?.data.results.map((launch: LaunchDetailed) => (
                  <Card
                    key={launch.id}
                    sx={{
                      width: "80%",
                      position: 'relative',
                      minHeight: 500,
                      backgroundImage: `url(${launch.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      margin: 5,
                      ':after': {
                        position: 'absolute',
                        zIndex: 1,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(19, 19, 19, 0.44)",
                        content: '""',
                        top: 0,
                        left: 0
                      }
                    }}>
                      <CardContent
                      sx={{
                          position: 'relative',
                          zIndex: 2
                        }}>
                          <Stack
                            direction="column"
                            mt={5}
                            maxWidth="500px"
                            textAlign="center"
                            margin="0 auto"
                          >
                            <SLNTypography kind="sectionTitleWhite"
                              sx={{

                                marginTop: "20px",
                                marginBottom: "12px",
                              }}
                            >
                              {launch.name}
                            </SLNTypography>
                            <SLNCountdown date={launch.net} />
                            <SLNTypography kind="sectionSubTitleWhite">
                              {date_builder(launch.net)}
                            </SLNTypography>
                            <Divider 
                              variant="fullWidth"
                              sx={{
                                borderTop: "1px solid rgba(0,0,0,0.1)",
                                marginTop: "1rem",
                                marginBottom: "1rem"
                              }}
                            />
                            <SLNTypography kind="textTitleWhite">
                              {launch.mission.type}
                            </SLNTypography>
                            <SLNTypography kind="textWhite">
                              {launch.mission.description}
                            </SLNTypography>
                          </Stack>
                      </CardContent>
                    </Card>
                  ))}
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
