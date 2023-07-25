import * as React from 'react';
import { Grid } from '@mui/material';
import { Samp } from '../../../Alldata';
import TextField from '@mui/material/TextField';

import { useState } from 'react';


import Section8 from '../Section8/Section8';
import Section9 from '../Section9/Section9';
import Section10 from '../Section10/Section10';


const Section7 = () => {
    const [value, setValue] = useState("");
    const [mess, setmess] = useState("");
    const CHARACTER_LIMIT = 160 + " Characters Remaining";
    const [values, setValues] = React.useState({
        name: "Hello"
    });

    const handleChange1 = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    

    const handleChange = (e) => {
        setValue(e.target.value);
        const vaal = e.target.value
        console.log("Value ", vaal)
        console.log(Samp.map((val, key) => {
            if (vaal == val.name) {
                return setmess(val.message)
            }
        }))
    };

    return (
        <>
            <Grid container className='ms-3 mt-1' >
                <Grid item xs={4} sm={3} md={4} lg={3.5}>
                    <div class="input-group mb-3">
                        <select value={value} onChange={handleChange} class="form-select" id="inputGroupSelect01">
                            <option selected>Pickup Template</option>
                            {
                                Samp.map((val, key) => {
                                    return (
                                        <>
                                            <option value={val.name}>{val.name}</option>
                                        </>
                                    )
                                })
                            }

                        </select><br />
                    </div>
                </Grid>
                <br />

            </Grid>
            <Section8 />
            {/* <Section9 /> */}
            <Grid className='mt-2 ms-3' item xs={4} sm={3} md={4} lg={12}>
                <TextField style={{ width: "60%" }} label="Type here"
                    inputProps={{
                        maxlength: CHARACTER_LIMIT
                    }}
                    multiline
                    rows={7}
                    maxRows={10}
                    value={mess}
                    helperText={`${mess.length}/${CHARACTER_LIMIT}`}
                    onChange={handleChange1("name")}
                    // margin="normal"
                    variant="outlined"
                />
            </Grid>
            <Section10 />
        </>


    )
}

export default Section7