import React from 'react';
import { AppBar as MUIAppBar, Box, Toolbar, Typography } from "@mui/material";

export default function MyAppBar (props) {
    return (
        <Box>
            <MUIAppBar>
                <Toolbar>
                    <Typography variant="h6">Ramsey Barghouti</Typography>
                </Toolbar>
            </MUIAppBar>
        </Box>
    )
};
