import React from 'react'
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { Grid } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Divider4 = () => {

    
    return (
        <>
            <Grid className='mt-2 ms-2' item xs={12} sm={12} md={12} lg={3}>
                <p style={{ fontSize: "14px", color: "#8A919E", }}>Status Code</p>
                <Checkbox {...label} defaultChecked /><span style={{ fontSize: "14px", color: "#8A919E" }}>Show All</span> <br />
                <hr />
                <Checkbox {...label} defaultChecked color="secondary" /><span style={{ fontSize: "14px", color: "#8A919E" }}>To number </span><br />
                <Checkbox {...label} defaultChecked color="success" /><span style={{ fontSize: "14px", color: "#8A919E" }}>Attempt to send</span><br />
                <Checkbox {...label} defaultChecked color="default" /><span style={{ fontSize: "14px", color: "#8A919E" }}>To phone number</span><br />
                <Checkbox
                    {...label}
                    defaultChecked
                    sx={{
                        color: pink[800],
                        '&.Mui-checked': {
                            color: pink[600],
                        },
                    }}
                /><span style={{ fontSize: "14px", color: "#8A919E" }}>Permission to send</span>

            </Grid>
        </>
    )
}

export default Divider4