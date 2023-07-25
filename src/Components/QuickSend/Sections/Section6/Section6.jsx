import React from 'react'
import { Grid } from '@mui/material';
import Section7 from '../Section7/Section7';


const Section6 = () => {
   

    return (
        <>
            <Grid container className='ms-3'>
                <Grid item xs={4} sm={3} md={4} lg={3.5}>
                    <div class="input-group mb-3">
                        <div class="input-group-text">
                            <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input" />
                        </div>
                        <select class="form-select" id="inputGroupSelect01">
                            <option selected>USMS</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </Grid>
                <Grid className='ms-5' item xs={4} sm={3} md={4} lg={3.5}>
                    <div class="input-group">
                        <div class="input-group-text">
                            <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input" />
                        </div>
                        <input type="text" class="form-control" aria-label="Text input with radio button" />
                    </div>
                </Grid>
            </Grid>
            <Section7/>
           
        </>


    )
}

export default Section6