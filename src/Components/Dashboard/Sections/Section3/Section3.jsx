import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import Second from './Second';
import Third from './Third';
import Section4 from '../Section4/Section4'
import Section5 from '../Section5/Section5';


function Section3() {
    const [toogle, updtoggle] = useState(true)
    const [toogle1, updtoggle1] = useState(true)

    const Chan = () => {
        updtoggle(true)
        updtoggle1(false)

    }
    const Chan1 = () => {
        updtoggle(false)
        updtoggle1(false)


    }
    const Chan2 = () => {
        updtoggle1(true)
        updtoggle(false)

    }
    return (
        <>
            <div className='mt-5 mb-5' style={{}}>
                <Box className='sec4box' sx={{width: '62%',marginLeft: "28%",backgroundColor: "white", borderRadius: "6px 6px 6px 6px", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 14px 0 rgba(0, 0, 0, 0.19)" }}>
                    <Grid container  >
                        <Grid onClick={Chan} className='mt-2' item xs={4} sm={3} md={4} lg={2} >
                            <h6 className="sec4h1 mt-1 ms-2">Over View</h6>
                        </Grid>
                        <Grid onClick={Chan1} className='mt-2 sec4b1' item xs={4} sm={4.7} md={4} lg={3} >
                            <h6 className="sec4h1 mt-1">Delivery & Errors</h6>
                        </Grid>
                        <Grid onClick={Chan2} className='mt-2 sec4b1' item xs={4} sm={3.5} md={4} lg={2} >
                            <h6 className="sec4h1 mt-1">Responses</h6>
                        </Grid><br />
                    </Grid>
                    <hr />
                    {
                        toogle
                            ? <Grid container  >
                                <Second />
                                <Third />
                            </Grid>
                            : toogle1 ? <Section5/>
                                : <Section4/>


                    }
                </Box>
            </div>
        </>
    )
}
export default Section3;