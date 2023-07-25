import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Section3 = () => {
    return (
        <>
            <div className='mt-2 mb-5' style={{}}>
                <Box className='MessSec3'>
                    <div className='Messtop'>
                        <div className="input-group" style={{ width: "25%" }}>
                            <input type="text" className="form-control form-control-sm" placeholder="Search Here" />
                            <button type="submit" className="input-group-text btn-primary"><SearchIcon /></button>
                        </div>
                        <div>
                            <Button style={{ textTransform: "none", letterSpacing: "1px" }} variant="outlined">Start Date & Time</Button>
                        </div>
                        <div>
                            <Button style={{ textTransform: "none", letterSpacing: "1px" }} variant="outlined">End Date & Time</Button>
                        </div>
                        <div>
                            <Button style={{ textTransform: "none", letterSpacing: "1px", border: "1px solid red", color: "red" }} variant="outlined">From</Button>
                        </div>
                        <div>
                            <Button style={{ textTransform: "none", letterSpacing: "1px", border: "1px solid red", color: "red" }} variant="outlined">To</Button>
                        </div>
                        <div>
                            <Button style={{ textTransform: "none", letterSpacing: "1px", border: "1px solid purple", color: "purple" }} variant="outlined">Status</Button>
                        </div>
                        <div>
                            <Button style={{ textTransform: "none", letterSpacing: "1px", border: "1px solid green", color: "green" }} variant="outlined" endIcon={<FilterAltIcon />}>
                                Filter
                            </Button>
                        </div>
                    </div>
                </Box>
            </div>
        </>
    )
}

export default Section3