import React from 'react'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {Examp} from '../../../Alldata'

const Section4 = () => {
    return (
        <>
            <div className='mt-2 mb-5' style={{}}>
                <Box className='Schesec4'>
                    <Grid container>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"  style={{color: "#938CFF"}}>Subject</th>
                                    <th scope="col" style={{color: "#938CFF"}}>Scheduled</th>
                                    <th scope="col" style={{color: "#938CFF"}}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Examp.map((val, key) => {
                                        return <tr>
                                            <td >{val.sub}</td>
                                            <td>{val.schedule}</td>
                                            <td style={{color: "#938CFF"}}>{val.status} </td>
                                            <td><DeleteIcon style={{color: "red"}}/></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </Grid>
                </Box>
            </div>
        </>
    )
}

export default Section4