import React from 'react'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Mess } from '../../../Alldata'


const Section4 = () => {
    return (
        <>
            <div className='mt-5 mb-5' style={{}}>
                <Box className='MessSec4'>
                    <Grid container  >
                        <table className="table table-no-border">
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">From</th>
                                    <th scope="col">To</th>
                                    <th scope="col">Direction</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Error Reason</th>
                                    <th scope="col" style={{ textAlign: "right" }}><CheckBoxOutlineBlankIcon /></th>
                                </tr>
                            </thead>
                            <tbody style={{ backgroundColor: "#D7E5FF"}}>
                                {
                                    Mess.map((val, key) => {
                                        return <tr>
                                            <td style={{ color: "#938CFF" }}>{val.Date}</td>
                                            <td>{val.From}</td>
                                            <td>{val.To}</td>
                                            <td>{val.Direction} </td>
                                            <td>{val.Status} </td>
                                            <td style={{ textAlign: "center" }}>{val.Errors} </td>
                                            <td style={{ color: "#938CFF", textAlign: "right" }}>{val.Logs} <CheckBoxOutlineBlankIcon /> </td>

                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>


                    </Grid>
                    <div className='btnnn'>
                        <Button className='mx-2' style={{textTransform: "none"}} variant="outlined" startIcon={<ArrowBackIcon />}>
                            Back
                        </Button>
                        <Button variant="outlined" style={{textTransform: "none",border: "1px solid green",color: "green"}} endIcon={<ArrowForwardIcon />}>
                            Next
                        </Button>
                    </div>
                </Box>
            </div>
        </>
    )
}

export default Section4