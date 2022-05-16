// src/pages/Home.tsx

import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";
import Base from "@sln/components/BaseLayout";

const Starship: FC<any> = (): ReactElement => {
    return (
        <Base>
            <Box sx={{
                flexGrow: 1,
                backgroundColor: 'whitesmoke',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Typography variant="h3">Starship</Typography>
            </Box>
        </Base>
    );
};

export default Starship;