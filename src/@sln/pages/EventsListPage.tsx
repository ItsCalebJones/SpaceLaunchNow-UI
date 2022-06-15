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

    const {data: events, isLoading} = useEventList({limit: 50});
    events?.data.results.map((event: Events) => (
        console.log(event.expeditions)
    ))
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
                <Stack direction="row" spacing={1.5} mt={5}>
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
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
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
                        {event.location && 
                        <Grid item xs='auto'>
                            <Chip color ='primary' label={event.location}/>
                        </Grid>
                        }
                        {event.spacestations[0] && 
                        <Grid item xs='auto'>
                            <Chip color ='info' label={event.spacestations[0]?.name}/>
                        </Grid>
                        }
                        {event.launches[0] && 
                        <Grid item xs='auto'>
                            <Chip color ='warning' label={event.launches[0]?.name}/>
                        </Grid>
                        }
                        {event.expeditions[0] && 
                        <Grid item xs='auto'>
                            <Chip color ='info' label={event.expeditions[0]?.name}/>
                        </Grid>
                        }       
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                {event.description}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button>Explore</Button>
                        </Grid>
                    </Grid>
                </Stack>           
            ))}
           </Container>
        </Base>
    );
};

export default EventsListPage;