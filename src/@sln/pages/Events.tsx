import React, {ReactElement, FC} from "react";
import {Box, 
        Container, 
        Typography, 
        Card, Divider, 
        Stack, 
        CardMedia,
        CardContent} 
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
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent>
                            <Stack direction="row" spacing={1}>
                                <SLNTypography kind='eventCategory'>
                                    Press Event
                                </SLNTypography>
                                <SLNTypography kind='eventDate'>
                                    JUN 12, 2022, NOON
                                </SLNTypography>
                            </Stack>
                    </CardContent>
                    </Box>
            </Stack>
           </Container>
        </Base>
    );
};

export default Events;