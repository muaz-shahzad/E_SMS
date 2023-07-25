import React from 'react'
import { Grid } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import { useState} from 'react';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { Sec_4 } from '../../../Alldata';
import LineChart2 from './LineChart2';
import BarChart2 from './BarChart2';


const Third = () => {
    const [toogle, updtoggle] = useState(true)
    const [alignments, setAlignments] = React.useState('left');
    const handleAlignment = (event, newAlignment) => {
        setAlignments(newAlignment);
    };
    const Chan = () => {
        updtoggle(true)

    }
    const Chan1 = () => {
        updtoggle(false)

    }
    const childrens = [
        <ToggleButton onClick={Chan} value="left" key="left">
            <AutoGraphIcon className='switch' style={{ color: "blue" }} />
        </ToggleButton>,
        <ToggleButton onClick={Chan1} value="center" key="center">
            <EqualizerIcon className='switch' style={{ color: "blue" }} />
        </ToggleButton>,
    ];
    const controls = {
        value: alignments,
        onChange: handleAlignment,
        exclusive: true,
    };

    return (
        <>
            <Grid className='incom' item xs={12} sm={12} md={12} lg={5.9} sx={{ border: "1px solid #8A919E", borderRadius: "6px 6px 6px 6px" }}>
                <Grid container >
                    <Grid item xs={8} sm={9} md={9} lg={9} >
                        <h5 className="sec4h6 mt-2">Incoming Messages</h5>
                    </Grid>
                    <Grid item xs={4} sm={3} md={3} lg={3} >
                        <ToggleButtonGroup className='togglebtn mt-1' size="small" {...controls} aria-label="Small sizes">
                            {childrens}
                        </ToggleButtonGroup>
                    </Grid>
                </Grid>
                <Grid className='mt-4 ms-1' container >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        {
                            toogle ? <LineChart2 /> :
                               <BarChart2/>
                        }
                    </Grid>
                </Grid>
                <Grid className="mt-4 mb-4" container >
                    {
                        Sec_4.map((val, key) => {
                            return <Grid className="ms-2 " item xs={12} sm={12} md={12} lg={3.7} sx={{ border: "1px solid #8A919E", borderRadius: "8px 8px 8px 8px" }}>
                                <Grid container >
                                    <Grid item xs={12} sm={12} md={12} lg={9} >
                                        <h6 style={{ fontWeight: "bold" }} className="ms-1 mt-1">{val.title}</h6>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={3} >
                                        {val.icon}
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} >
                                        <h2 className='mt-5 ms-2' style={{ color: "black", fontWeight: "bold" }}>{val.H2}</h2>
                                        <p className='ms-2' style={{ color: "#938CFF", fontSize: "small" }} >{val.P}</p>
                                    </Grid>
                                </Grid>

                            </Grid>

                        })
                    }
                </Grid>
            </Grid>
        </>
    )
}

export default Third