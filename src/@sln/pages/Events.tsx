import React, {ReactElement, FC} from "react";
import {Box, Container, Typography} from "@mui/material";
import Base from "@sln/components/BaseLayout";
import { Card } from "@mui/material";
import { Divider } from "@mui/material";
import { SLNTypography } from "@sln/components/SLNTypography";
import {Stack, Grid, } from "@mui/material";
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
           </Container>
        
        </Base>
    );
};

export default Events;