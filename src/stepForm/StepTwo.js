import React from 'react'
import styled from "styled-components"
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


const StepTwo = ({setMoveToStepThree, handleBack}) => {
    return (
        <>
             <strong>Assign user role to new user</strong>
            <Typography>Orci, porttitor feugiat sociis quis pellentesque non morbi. Ultricies mi dignissim lorem in. Vitae aliquet gravida sed massa dolor.</Typography>
            <div style={{marginTop: 40}}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="User (No Admin access)" /><br/>
            <FormControlLabel control={<Checkbox defaultChecked />} label="User (Admin access)" />
            </div>

            
            <Typography mt={3}>Orci, porttitor feugiat sociis quis pellentesque non morbi. Ultricies mi dignissim lorem in. Vitae aliquet gravida sed massa dolor.</Typography>



            <div style={{marginTop: 40}}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Super Admin" /><br/>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Loan Management" /><br />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Funds Management" /><br/>
            <FormControlLabel control={<Checkbox defaultChecked />} label="User Management" />
            </div>
                
            <div className="submitAdmin_form">
                <Button variant="text" onClick={handleBack}>Back</Button>
                <Button variant="contained" style={{marginLeft: 20}} onClick={()=>setMoveToStepThree(true)}>Next</Button>
            </div>

        </>
    )
}


export default StepTwo