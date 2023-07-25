import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// 
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import TelegramIcon from '@mui/icons-material/Telegram';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TimePicker from 'react-time-picker';

const Section10 = () => {
    const [state, setstate] = useState("")
    const [state1, setstate1] = useState("Black Friday Compain")
    const [open, setOpen] = React.useState(false);
    const [value, onChange1] = useState('12:00 am')
    const [date, setdate] = useState(new Date())
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const Onchange = (e) => {
        setstate(e.target.value)
    }
    const Confirm = (e) => {
        setstate1(state)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const onChange = date => {
        setdate(date)
    }
    return (
        <>
            <Grid container>
                <Grid className="mt-4  mb-1" item xs={4} sm={3} md={4} lg={6.5}>
                    <div className='schedule'>
                        <p>
                            <input onClick={handleClickOpen}
                                style={{ border: "1px solid #3EFF8F" }}
                                className="form-check-input mt-1 mx-2" type="checkbox"
                                value="" aria-label="Checkbox for following text input" />
                            Schedule

                        </p>
                        <p>{date.getDate()}/{date.getDay()}/{date.getFullYear()} </p>
                        <p>{value}</p>
                        <p>Subject: {state1}</p>
                    </div>
                </Grid>
            </Grid>
            <Grid className="mt-1 ms-3 mb-5">
                <Button className='mb-5' style={{ fontSize: "10px", color: "red", border: "1px solid red" }} variant="outlined" startIcon={<CachedIcon style={{ fontSize: "14px", color: "red" }} />}>
                    Reset
                </Button>
                <Button className='ms-3 mb-5' style={{ fontSize: "10px" }} variant="contained" startIcon={<TelegramIcon style={{ fontSize: "14px" }} />}>
                    Send
                </Button>
            </Grid>
            {/* Popup */}
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogContent>
                    <Calendar
                        onChange={onChange}
                        value={date}
                        minDate={new Date()}
                    />
                    <hr />
                    <TimePicker
                        onChange={onChange1}
                        value={value} />
                    <hr />
                    <TextField style={{ width: "100%" }} onChange={Onchange} id="outlined-basic" label="Subject" variant="outlined" />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={Confirm} >
                       OK
                    </Button>
                    <Button autoFocus onClick={handleClose}>
                       Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Section10