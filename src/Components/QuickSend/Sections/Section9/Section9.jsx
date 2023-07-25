import React from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';


const Section9 = () => {
    const CHARACTER_LIMIT = 160 + " Characters Remaining";
    const [values, setValues] = React.useState({
        name: "Hello"
    });

    const handleChange1 = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    return (
        <>
            <Grid className='mt-2 ms-3' item xs={4} sm={3} md={4} lg={12}>
                <TextField style={{ width: "60%" }} label="Type here"
                    inputProps={{
                        maxlength: CHARACTER_LIMIT
                    }}
                    multiline
                    rows={7}
                    maxRows={10}
                    value={values.name}
                    helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
                    onChange={handleChange1("name")}
                    // margin="normal"
                    variant="outlined"
                />
            </Grid>
        </>
    )
}

export default Section9