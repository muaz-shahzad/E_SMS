import React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Section4 from '../Section4/Section4';
import Section5 from '../Section5/Section5';
import Section6 from '../Section6/Section6';


const Section3 = () => {
    return (
        <div className='' style={{}}>
            <Box className='sec4box' sx={{ width: '62%', marginLeft: "28%", backgroundColor: "white", borderRadius: "6px 6px 6px 6px", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 14px 0 rgba(0, 0, 0, 0.19)" }}>
                <Grid container  >
                    <Grid className='mt-2' item xs={4} sm={3} md={4} lg={12} >
                        <h6
                            style={{
                                fontStyle: "normal",
                                fontSize: "14px",
                                lineHeight: "17px",
                            }}
                            className="quicksec3h1 mt-1 ms-3">Recipient
                        </h6>
                    </Grid>
                </Grid>
                <Grid className='mb-2 mt-3' item xs={4} sm={3} md={4} lg={8}>
                    <Section4 />
                </Grid>
                <Grid container  >
                    <Grid className='' item xs={4} sm={3} md={4} lg={12} >
                        <h6
                            style={{
                                fontStyle: "normal",
                                fontSize: "14px",
                                lineHeight: "17px",
                            }}
                            className="quicksec3h1 ms-3">File Upload Choose
                        </h6>
                    </Grid>
                </Grid>
                <Grid className='mt-1' item xs={4} sm={3} md={4} lg={8}>
                    <Section5 />
                </Grid>
                <Grid container  >
                    <Grid className='mt-4 ms-1' item xs={4} sm={3} md={4} lg={12} >
                        <h6
                            style={{
                                fontStyle: "normal",
                                fontSize: "14px",
                                lineHeight: "17px",
                            }}
                            className="quicksec3h1 ms-3">Sender ID
                        </h6>
                    </Grid>
                </Grid>
                <Grid className='mt-1' item xs={4} sm={3} md={4} lg={12}>
                    <Section6 />
                </Grid>
            </Box>
        </div>
    )
}

export default Section3