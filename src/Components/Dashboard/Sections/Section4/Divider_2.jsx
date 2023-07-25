import * as React from 'react';
import { Grid } from '@mui/material';
import { useState} from 'react';
import MuiToggleButton from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PieChartIcon from '@mui/icons-material/PieChart';
import GridViewIcon from '@mui/icons-material/GridView';
import LineChart3 from './LineChart3';
import BarChart3 from './BarChart3';
import PieChart3 from './PieChart3';
import Divider4 from './Deliver4';


const Divider_2 = () => {
    const [alignment, setAlignment] = React.useState('left');
    const [toogle, updtoggle] = useState(true)
    const [toogle1, updtoggle1] = useState(true)
    const [toogle2, updtoggle2] = useState(true)

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const Chan = () => {
        updtoggle(true)
        updtoggle1(false)
        updtoggle2(false)

    }
    const Chan1 = () => {
        updtoggle(false)
        updtoggle1(false)
        updtoggle2(false)


    }
    const Chan2 = () => {
        updtoggle1(true)
        updtoggle(false)
        updtoggle2(false)

    }
    const Chan3 = () => {
        updtoggle1(false)
        updtoggle(false)
        updtoggle2(true)


    }
    const ToggleButton = styled(MuiToggleButton)(({ selectedColor }) => ({
        "&.Mui-selected, &.Mui-selected:hover": {
            color: "black",
            backgroundColor: selectedColor

        }
    }));
    const children = [
        <ToggleButton onClick={Chan} value="left" key="left">
            <AutoGraphIcon style={{ color: "blue", fontSize: "18px" }} />
        </ToggleButton>,
        <ToggleButton onClick={Chan1} value="second" key="center">
            <EqualizerIcon style={{ color: "blue", fontSize: "18px" }} />
        </ToggleButton>,
        <ToggleButton onClick={Chan2} value="third" key="center">
            <PieChartIcon style={{ color: "blue", fontSize: "18px" }} />
        </ToggleButton>,
        <ToggleButton onClick={Chan3} value="fourth" key="center">
            <GridViewIcon style={{ color: "blue", fontSize: "18px" }} />
        </ToggleButton>,
    ];
    const control = {
        value: alignment,
        onChange: handleChange,
        exclusive: true,
    };
    return (
        <>
            <Grid className='ms-2 mx-2 mt-3' container sx={{ border: "1px solid #8A919E", borderRadius: "4px 4px 4px 4px" }}>
                <Grid className='mt-3 mb-2' item xs={12} sm={12} md={12} lg={12} >
                    <h6 className="sec5h6 mt-2 ms-3">Total Outgoing Messages</h6>
                </Grid>
            </Grid>
            <Grid className='ms-2 mx-2' container sx={{ border: "1px solid #8A919E", borderRadius: "4px 4px 4px 4px" }}>
                <Grid className='mt-3 mb-2' item xs={12} sm={12} md={12} lg={9.8} >
                    <h6 className="sec5h6 mt-2 ms-2">Total Messages:
                        <span style={{ fontSize: "12px", color: "#938CFF" }}> 732</span></h6>
                </Grid>
                <Grid className='mt-2 mb-2' item xs={12} sm={12} md={12} lg={2} >
                    <ToggleButtonGroup className='' {...control} aria-label="Small sizes">
                        {children}
                    </ToggleButtonGroup>
                </Grid>
                <Divider4 />
                <Grid className='mt-1 mb-2 ms-3' item xs={12} sm={12} md={12} lg={8.6}>
                    {
                        toogle
                            ? <LineChart3 />
                            : toogle1 ? <PieChart3/>
                            : toogle2 ? <h1>Grid Chart</h1>
                                : <BarChart3/>


                    }
                </Grid>
            </Grid>


        </>
    )
}

export default Divider_2