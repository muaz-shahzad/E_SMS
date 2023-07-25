import React from 'react'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';


const Section3 = () => {
    return (
        <div className='container-fluid mt-5 mb-2' >
            <Box sx={{ width: '90%' }}>
                <Grid container justifyContent="flex-end" >
                    <Grid item xs={10.7} sm={8.8} md={8.6} lg={8.7} >
                        <h5 className="sec3h1 mt-1 ms-5">My List</h5>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
export default Section3