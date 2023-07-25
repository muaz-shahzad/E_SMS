import React from "react";
import { Grid } from '@mui/material';



function Sec2Card(props) {
    return (
        <>
            <Grid className="mt-2 ms-4"  xs={9} sm={3.9} md={3.9} lg={1.5} sx={{ backgroundColor: "white", borderRadius: "10px 10px 10px 10px", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 14px 0 rgba(0, 0, 0, 0.19)" }}>
                <Grid container >
                    <Grid xs={5} sm={4} md={4} lg={4}>
                        <h2 className='mt-2 ms-2' style={{ color: "#938CFF", fontWeight: "bold" }}>{props.title}</h2>
                    </Grid>
                    <Grid sx={{ textAlign: "right" }} xs={6} sm={6} md={6} lg={6}>
                        {props.icon}
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12}>
                        <h6 className='mt-1 ms-2' style={{ fontSize: "14px", color: "#8A919E", fontWeight: "bold" }}>Today’s SMS</h6>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )

}
export default Sec2Card