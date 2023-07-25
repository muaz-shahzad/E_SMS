import React from 'react'
import { Grid } from '@mui/material';

const Section8 = () => {
    return (
        <>
            <Grid container  >
                <Grid className='mt-2 ms-1' item xs={4} sm={3} md={4} lg={12} >
                    <h6
                        style={{
                            fontStyle: "normal",
                            fontSize: "14px",
                            lineHeight: "17px",
                        }}
                        className="quicksec3h1 ms-3">Message
                    </h6>
                </Grid>
            </Grid>
        </>
    )
}

export default Section8