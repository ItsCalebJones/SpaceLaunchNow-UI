import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";
import Base from "@sln/components/BaseLayout";
import { Card } from "@mui/material";

const Events: FC<any> = (): ReactElement => {
    return (
        <Base>
            <Box sx={{
                flexGrow: 1,
                backgroundColor: 'whitesmoke',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Typography variant="h3">Events</Typography>
            </Box>
        </Base>
    );
};

export default Events;