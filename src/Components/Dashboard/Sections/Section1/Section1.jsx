import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Section1() {
    return (
        <>
            <div className='container-fluid' >
                <Box className='mt-4' sx={{ width: '100%', }}>
                    <Box sx={{ width: '80%',textAlign: "right",margin: "auto"}}>
                        <Grid container justifyContent="flex-end">
                            <Grid lg={9.4} md={9} sm={9} xs={10} sx={{backgroundColor: "white",borderRadius: "8px 8px 8px 8px" }}>
                                <NotificationsIcon style={{color: "#8CB2FD",fontSize: "50px"}}/>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
            </div>
        </>
    )
}
export default Section1;