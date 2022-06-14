import React, {ReactElement, FC} from "react";
import {Box, 
        Container, 
        Typography, 
        Card, Divider, 
        Stack, 
        CardMedia,
        CardContent,
        Grid,
        Chip,
        createTheme,
        Button
    } 
    from "@mui/material";
import Base from "@sln/components/BaseLayout";
import { SLNTypography } from "@sln/components/SLNTypography";
import { useEventList } from "@sln/service/api/event/event";
import { Events } from "@sln/service/model";
import { data } from "cypress/types/jquery";
import { width } from "@mui/system";




const EventsListPage: FC<any> = (): ReactElement => {

    const {data: events, isLoading} = useEventList({limit: 5});



    return (
        <Base>
           <Container>
           <Stack
                spacing={0}
                direction="column"
                alignItems="center"
                style={{ minHeight: '15vh' }}
                mt={25}
            >
                <SLNTypography kind="sectionTitle">Upcoming Events</SLNTypography>
                {/* Figure out styling for divider */}
                <Box
                    sx={{
                        width: 450,
                        mt:2
                    }}
                >
                    <Divider 
                        orientation="horizontal" 
                        color="gray" 
                        flexItem>
                    </Divider>   
                </Box>
            </Stack> 



            {events?.data.results.map((event: Events) => (
                <Stack direction="row" spacing={5} mt={5}>
                    <Card raised sx={{height:"250px",
                                        width:"368.88px"}}
                    >
                        <CardMedia
                        component="img"
                        sx={{height:'100%',
                            width:"100%"}}
                        src= {event.feature_image}
                        >
                        </CardMedia>
                    </Card>
                    <Box>
                        <CardContent>
                            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                                <Grid item xs="auto">
                                    <SLNTypography kind='eventCategory'>
                                        {event.type.name}
                                    </SLNTypography>
                                </Grid>
                                <Grid item xs="auto">
                                    <SLNTypography kind='eventDate'>
                                        {event.date}
                                    </SLNTypography>
                                </Grid>
                                <Grid item xs={12}>
                                    <SLNTypography kind='eventTitle'>
                                        {event.name}
                                        </SLNTypography>
                                </Grid>  
                                <Grid item xs={12}>
                                    <Chip label={event.location}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2">
                                    Text about event goes here
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button>Explore</Button>
                                </Grid>
                            </Grid>
                        </CardContent>   
                    </Box>
                </Stack>
                  
                  ))}

            {/* <Stack direction="row" spacing={2}>
                    <Card raised>
                        <CardMedia
                        component="img"
                        sx={{height: 250}}
                        src=
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/2021_nasa_astro_image_20211202132624.jpeg"
                        >
                        </CardMedia>
                    </Card>
                    <Box>
                        <CardContent>
                            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                                <Grid item xs="auto">
                                    <SLNTypography kind='eventCategory'>
                                        Press Event
                                    </SLNTypography>
                                </Grid>
                                <Grid item xs="auto">
                                    <SLNTypography kind='eventDate'>
                                        JUN 12, 2022, NOON
                                    </SLNTypography>
                                </Grid>
                                <Grid item xs={12}>
                                    <SLNTypography kind='eventTitle'>
                                    2021 NASA Astronaut Candidates Announcement
                                        </SLNTypography>
                                    </Grid>
                                <Grid item xs={12}>
                                    <Chip label= "Ellington Field Joint Reserve Base"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2">
                                    Text about event goes here
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button>Explore</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Box>
            </Stack> */}
           </Container>
        </Base>
    );
};

export default EventsListPage;