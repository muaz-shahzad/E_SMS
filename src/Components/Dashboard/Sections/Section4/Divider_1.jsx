import React from 'react'
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import MuiToggleButton from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Divider2 from './Divider2';
import Divider_2 from './Divider_2';

const Divider_1 = () => {
    const [alignment, setAlignment] = React.useState('left');
    const [alignments, setAlignments] = React.useState('left');
    const [toogle, updtoggle] = useState(true)
    const [toogle1, updtoggle1] = useState(true)
    const handleAlignment = (event, newAlignment) => {
        setAlignments(newAlignment);
    };
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
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
    const ToggleButton = styled(MuiToggleButton)(({ selectedColor }) => ({
        "&.Mui-selected, &.Mui-selected:hover": {
            color: "black",
            backgroundColor: selectedColor

        }
    }));
    const children = [
        <ToggleButton onClick={Chan} value="left" key="left" selectedColor="#938CFF">
            <h6 className='div1'>Delivery Status</h6>
        </ToggleButton>,
        <ToggleButton onClick={Chan1} value="center" key="center" selectedColor="#938CFF">
            <h6 className='div1'>Status Code</h6>
        </ToggleButton>,
        <ToggleButton onClick={Chan2} value="right" key="right" selectedColor="#938CFF">
            <h6 className='div1'>Total Messages</h6>
        </ToggleButton>,
    ];
    const childrens = [
        <ToggleButton onClick={Chan} value="left" key="left" selectedColor="#938CFF">
            <h6 className='div1'>Outgoing</h6>
        </ToggleButton>,
        <ToggleButton onClick={Chan1} value="center" key="center" selectedColor="#938CFF">
            <h6 className='div1'>Incoming</h6>
        </ToggleButton>,
    ];
    const control = {
        value: alignment,
        onChange: handleChange,
        exclusive: true,
    };
    const controls = {
        value: alignments,
        onChange: handleAlignment,
        exclusive: true,
    };

    return (
        <>
            <Grid className='ms-2 mx-2' container sx={{ border: "1px solid #8A919E", borderRadius: "4px 4px 4px 4px" }}>
                <Grid className='mt-3 mb-2' item xs={12} sm={12} md={12} lg={1.6} >
                    <h6 className="sec5h6 mt-1 ms-2">Breakdown by</h6>
                </Grid>
                <Grid className='mt-2 mb-2' item xs={12} sm={12} md={12} lg={6} >
                    <ToggleButtonGroup className='' {...control} aria-label="Small sizes">
                        {children}
                    </ToggleButtonGroup>
                </Grid>
                <Grid className='mt-2 ' item xs={12} sm={12} md={12} lg={2} >
                    <h6 className="sec5h6 mt-2 ms-2">Message Direction</h6>
                </Grid>
                <Grid className='mt-2 mb-2' item xs={12} sm={12} md={12} lg={2.1} >
                    <ToggleButtonGroup className='' {...controls} aria-label="Small sizes">
                        {childrens}
                    </ToggleButtonGroup>
                </Grid>
            </Grid>
            {
                toogle
                    ?  <Divider2 />
                    : toogle1 ? <Divider_2/>
                        : <Divider_2/>


            }
           
        </>
    )
}

export default Divider_1