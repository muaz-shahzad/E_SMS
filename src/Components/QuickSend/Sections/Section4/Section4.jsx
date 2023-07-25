import React from "react";
import MaterialUiPhoneNumber from "material-ui-phone-number";


const Section4 = () => {

    return (
        <>
            <MaterialUiPhoneNumber
                className="mb-3 ms-2"
                defaultCountry="es"
                onlyCountries={['gb', 'es', 'pk', 'in']}
                size='small'
                label='Required'
                variant='outlined'
                name='phone'
               
                style={{padding: "5px",backgroundColor: "white"}}
            />
        </>
    )
}

export default Section4