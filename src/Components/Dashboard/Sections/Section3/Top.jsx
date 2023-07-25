import React from 'react'
import { Grid } from '@mui/material';


function Top() {

    return (
        <>
            <Grid container >
                <Grid className='mt-2 sec4b1' item xs={12} sm={12} md={12} lg={2} >
                    <h6 className="sec4h1 mt-1 ms-2 ">Over View</h6>
                </Grid>
                <Grid className='mt-2 sec4b1' item xs={12} sm={12} md={12} lg={3} >
                    <h6 className="sec4h1 mt-1">Delivery & Errors</h6>
                </Grid>
                <Grid className='mt-2 sec4b1' item xs={12} sm={12} md={12} lg={2} >
                    <h6 className="sec4h1 mt-1">Responses</h6>
                </Grid><br />
            </Grid>
        </>
    )
}

export default Top