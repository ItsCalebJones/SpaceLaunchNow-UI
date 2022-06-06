import React, {ReactElement, FC} from "react";
import {Box, 
        Container, 
        Typography, 
        Card, Divider, 
        Stack, 
        CardMedia,
        CardContent,
        Grid} 
    from "@mui/material";
import Base from "@sln/components/BaseLayout";
import { SLNTypography } from "@sln/components/SLNTypography";

const Events: FC<any> = (): ReactElement => {
    return (
        <Base>
           <Container>
           <Stack
                spacing={0}
                direction="column"
                alignItems="center"
                style={{ minHeight: '100vh' }}
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
            <Stack direction="row" spacing={2}>
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
                            {/* <Stack direction="column">
                                <Stack direction="row" spacing={1}>
                                    <SLNTypography kind='eventCategory'>
                                        Press Event
                                    </SLNTypography>
                                    <SLNTypography kind='eventDate'>
                                        JUN 12, 2022, NOON
                                    </SLNTypography>
                                </Stack>
                                <Stack>
                                    <SLNTypography kind='eventDate'>
                                        JUN 12, 2022, NOON
                                    </SLNTypography>
                                </Stack>
                            </Stack> */}
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
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Box>
            </Stack>
           </Container>
        </Base>
    );
};

export default Events;