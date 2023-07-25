import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Sec3} from '../../../Alldata'
import Sec2Card from './Sec2Card'


function Section3() {
    const [days, setdays] = React.useState('');
    const handleChange = (event) => {
        setdays(event.target.value);
    };

    return (
        <>
            <div className='container-fluid mt-5 mb-5' >
                <Box sx={{ width: '90%'}}>
                    <Grid container justifyContent="flex-end" >
                        <Grid  item xs={10.7} sm={8.8} md={8.6} lg={8.7} >
                            <h6 className="sec3h1 mt-1 ms-5">Dashboard</h6>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid xs={12} sm={12} md={12} lg={12} className="mt-3" container justifyContent="flex-end">
                            {
                                Sec3.map((val, key) => {
                                    return <Sec2Card
                                        id={key}
                                        key={val.key}
                                        icon={val.icon}
                                        title={val.title}
                                    />
                                })
                            }
                        </Grid>
                    </Grid>
                    <Grid className="mt-3" container sx={{ textAlign: "right"}}>
                        <Grid xs={12} sm={12} md={12} lg={12}>
                            <FormControl className='drop' style={{ width: "7%", textAlign: "left" }}>
                                <Select variant="standard"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    disableUnderline
                                    value={days}
                                    label="Age"
                                    onChange={handleChange}
                                    style={{ color: "#8A919E" }}
                                >
                                    <MenuItem value={10}>7 days</MenuItem>
                                    <MenuItem value={20}>30 days</MenuItem>
                                    <MenuItem value={30}>1 Month</MenuItem>
                                    <MenuItem value={40}>3 Month</MenuItem>
                                    <MenuItem value={50}>6 Month</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}
export default Section3;