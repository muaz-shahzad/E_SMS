import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';



const Section4 = (props) => {
    return (
        <>
            <Grid container className="accord mt-2">
                <Grid container className="" >
                    <Grid item xs={10.7} sm={8.8} md={8.6} lg={10} >
                        <Accordion>
                            <Accordion.Item eventKey="0" className="accitem " >
                                <Accordion.Header>
                                    <h5 className="acch5">{props.title}</h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                    {props.message}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Grid>
                    <Grid item xs={10.7} sm={8.8} md={8.6} lg={1}>
                        <Button
                            className="editbtn mt-3"
                            variant="outlined"
                            size="small"
                            onClick={() => {
                                props.onedit(props.id)
                            }}>
                            Edit
                        </Button>
                    </Grid>
                    <Grid item xs={10.7} sm={8.8} md={8.6} lg={1}>
                        <IconButton
                            aria-label="delete"
                            className="mt-2"
                            onClick={() => {
                                props.onselect(props.id)
                            }}>
                            <DeleteIcon
                                className="mt-1"
                                style={{ color: "red" }}
                            />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Section4