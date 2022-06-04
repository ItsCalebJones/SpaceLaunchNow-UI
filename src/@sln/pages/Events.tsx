import React, {ReactElement, FC} from "react";
import {Box, Container, Typography} from "@mui/material";
import Base from "@sln/components/BaseLayout";
import { Card } from "@mui/material";
import { Divider } from "@mui/material";
import { SLNTypography } from "@sln/components/SLNTypography";
import { Grid } from "@mui/material";
const Events: FC<any> = (): ReactElement => {
    return (
        <Base>
           <Container>
           <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                style={{ minHeight: '100vh' }}
                mt={25}
            >
                <Grid item xs={3}>
                <Typography variant="h3">Upcoming Events</Typography>
                </Grid>   
            </Grid> 
           </Container>
        </Base>
    );
};

export default Events;