import * as React from 'react';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Section4 from '../Section4/Section4';
import { useState } from 'react';

const Section3 = () => {
    // Hooks
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'FirstName' },
        { key: 1, label: 'LastName' },
        { key: 2, label: 'Company' },
        { key: 3, label: 'Website' },
    ]);
    // Fucntions
    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const CHARACTER_LIMIT = 160;
    const [values, setValues] = React.useState({
        name: ""
    });
    // Add template Fucntions
    const [curr, upd] = useState({
        title: "",
        message: "",
    });
    const [edititem, updedit] = useState(null)
    const [toogle, updtoggle] = useState(true)
    const [items, setitems] = useState([]);

    const Type = (e) => {
        const { name, value } = e.target;
        upd((Prev) => {
            return {
                ...Prev,
                [name]: value
            }
        })
    }
    // Add Fucntion
    const Add = () => {
        if (!curr) {
            alert("Please Add a item...!!")
        }
        else if (curr && !toogle) {
            setitems(
                items.map((val, index) => {
                    if (index === edititem) {
                        return {
                            ...val,
                            title: curr.title,
                            message: curr.message,
                        }
                    }
                    return val;
                })


            )
            upd({
                title: "",
                message: "",
            });
            updedit(null)
            updtoggle(true)
            handleClose();
        }
        else {
            setitems([...items, curr]);
            upd({
                title: "",
                message: "",
            });
        }
    }
    // Delete Function
    const deleteItem = (id) => {
        console.log("Delted Horaha")
        setitems((preval) => {
            return preval.filter((val, key) => {
                return key !== id;
            })

        })
    }
    // Edit Function
    const EditItem = (id) => {
        console.log("Edit horaha")
        handleClickOpen()
        let neweditItem = items.find((arr, index) => {
            console.log(index)
            console.log(id)
            return index == id
        });
        upd({
            title: neweditItem.title,
            message: neweditItem.message,

        })
        updedit(id)
        updtoggle(false)
    }
    return (
        <>
            <div className='container-fluid mt-4 mb-2' >
                <Box sx={{ width: '100%' }}>
                    <Grid container className="temp" sx={{ width: '53%' }}>
                        <Grid item xs={10.7} sm={8.8} md={8.6} lg={9} >
                            <h5 className="sec3h1 mt-1">My Templates</h5>
                        </Grid>
                        <Grid item xs={10.7} sm={8.8} md={8.6} lg={3} >
                            <Button onClick={handleClickOpen} className='ms-4' style={{ border: "none", textTransform: "none", fontSize: "15px" }} variant="outlined" startIcon={<AddIcon />}>
                                Add Template
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <Box sx={{ width: '100%' }}>
                {items.map((val, key) => {
                    return <Section4
                        id={key}
                        key={key}
                        title={val.title}
                        message={val.message}
                        onselect={deleteItem}
                        onedit={EditItem}
                    />
                })}
            </Box>
            {/* Popup */}
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle id="responsive-dialog-title">
                    <h4 className='pop'>Create SMS Template</h4>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText >
                        <h6 style={{ color: "black" }}>Template Name</h6>
                        <TextField
                            name="title"
                            style={{ width: "100%" }}
                            id="outlined-basic"
                            label="Type here"
                            variant="outlined"
                            className='mt-2'
                            value={curr.title}
                            onChange={Type}
                        />

                        <h6 className='mt-5' style={{ color: "black" }}>Message</h6>
                        <TextField
                            name="message"
                            className='mt-3'
                            style={{ width: "100%" }}
                            label="Type here"
                            inputProps={{
                                maxlength: CHARACTER_LIMIT
                            }}
                            multiline
                            rows={7}
                            maxRows={10}
                            value={curr.message}
                            helperText={`${curr.message.length}/${CHARACTER_LIMIT}`}
                            onChange={Type}
                            variant="outlined"

                        />
                        <p style={{ fontSize: "14px" }}>
                            Tags:
                            <span className='ms-2'>
                                {chipData.map((data) => {
                                    let icon;

                                    if (data.label === 'React') {
                                        icon = <TagFacesIcon />;
                                    }
                                    return (

                                        <Chip
                                            icon={icon}
                                            label={data.label}
                                            onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                                        />

                                    );
                                })}
                            </span>
                        </p>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    {
                        toogle ? <Button onClick={Add}>Save</Button>
                            : <Button onClick={Add}>Edit</Button>
                    }
                </DialogActions>

            </Dialog>
        </>

    )
}
export default Section3