import React, { ReactElement, FC } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  Divider,
  Stack,
  CardMedia,
  CardContent,
  Grid,
  Chip,
  createTheme,
  Button,
} from "@mui/material";
import Base from "@sln/components/BaseLayout";
import { SLNTypography } from "@sln/components/SLNTypography";
import { useEventList } from "@sln/service/api/event/event";
import { Events } from "@sln/service/model";
import { data } from "cypress/types/jquery";
import { textAlign, width } from "@mui/system";
import { SLNButton } from "@sln/components/SLNButton";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SkeletonElement from "@sln/skeletons/SkeletonElement";
import { date_builder } from "@sln/components/utils/FunctionUtils";

const EventsListPage: FC<any> = (): ReactElement => {
  const limit = 100;
  const { data: events, isLoading } = useEventList({ limit });
  return (
    <Base>
      <Container>
        <Stack
          spacing={0}
          direction="column"
          alignItems="center"
          style={{ minHeight: "15vh" }}
          mt={25}
        >
          <SLNTypography kind="sectionTitle">Upcoming Events</SLNTypography>
          {/* Figure out styling for divider */}
          <Box
            sx={{
              width: 450,
              mt: 2,
            }}
          >
            <Divider orientation="horizontal" color="gray" flexItem></Divider>
          </Box>
        </Stack>

        {!isLoading &&
          events?.data.results.map((event: Events) => (
            <Stack direction="row" spacing={1.5} mt={5}>
              <Card raised sx={{ height: "250px", width: "368.88px" }}>
                <CardMedia
                  component="img"
                  sx={{ height: "100%", width: "100%" }}
                  src={event.feature_image}
                ></CardMedia>
              </Card>
              <Grid
                container
                rowSpacing={0.2}
                columnSpacing={{ xs: 1, sm: 1, md: 1 }}
              >
                <Grid item xs="auto">
                  <SLNTypography kind="eventCategory">
                    {event.type.name}
                  </SLNTypography>
                </Grid>
                <Grid item xs="auto">
                  <SLNTypography kind="eventDate">
                    {date_builder(event.date)}
                  </SLNTypography>
                </Grid>
                <Grid item xs={12}>
                  <SLNTypography kind="eventTitle">{event.name}</SLNTypography>
                </Grid>
                {event.location && (
                  <Grid item xs="auto">
                    <Chip
                      sx={{ height: "20px" }}
                      color="primary"
                      label={event.location}
                    />
                  </Grid>
                )}
                {event.spacestations[0] && (
                  <Grid item xs="auto">
                    <Chip
                      sx={{ height: "20px" }}
                      color="info"
                      label={event.spacestations[0]?.name}
                    />
                  </Grid>
                )}
                {event.launches[0] && (
                  <Grid item xs="auto">
                    <Chip
                      sx={{ height: "20px" }}
                      color="warning"
                      label={event.launches[0]?.name}
                    />
                  </Grid>
                )}
                {event.expeditions[0] && (
                  <Grid item xs="auto">
                    <Chip
                      sx={{ height: "20px" }}
                      color="info"
                      label={event.expeditions[0]?.name}
                    />
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Typography variant="body2">{event.description}</Typography>
                </Grid>
                <Grid item xs={12}>
                  {/* <Button>Explore</Button> */}
                  <SLNButton
                    startIcon={
                      <CalendarTodayIcon fontSize="small" htmlColor="white" />
                    }
                    kind="evtbtn"
                  >
                    <SLNTypography kind="buttonText">View Event</SLNTypography>
                  </SLNButton>
                </Grid>
              </Grid>
            </Stack>
          ))}

        {/* {isLoading && <div style={{
                        alignItems:'center',
                        justifyContent:'center',
                        textAlign:'center'
            }}><h1>Loading...</h1></div>} */}

        {isLoading && <SkeletonElement limit={limit} />}
      </Container>
    </Base>
  );
};

export default EventsListPage;
