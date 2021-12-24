import React from 'react'
import styled from "styled-components"
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';




const StepOne = ({ setMoveToStepTwo, handleClose }) => {
    
    return (
        <>
             <strong>Admin Information</strong>
            <Typography>Orci, porttitor feugiat sociis quis pellentesque non morbi. Ultricies mi dignissim lorem in. Vitae aliquet gravida sed massa dolor.</Typography>
            <Double>
            <div style={{width: '50%'}}>
            <label>
            First Name
            </label><br/><br/>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width:'90%'}}/>
                </div>
                
                <div style={{width: '50%'}}>
            <label>
            First Name
            </label><br/><br/>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width:'90%'}}/>
            </div>
            </Double>

            <Double>
            <div style={{width: '50%'}}>
            <label>
            Email 
            </label><br/><br/>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width:'90%'}}/>
                </div>
                
                <div style={{width: '50%'}}>
            <label>
            Phone number
            </label><br/><br/>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width:'90%'}}/>
            </div>
            </Double>


            <Double>
            <div style={{width: '50%'}}>
            <label>
            Username
            </label><br/><br/>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width:'90%'}}/>
                </div>
                
                <div style={{width: '50%'}}>
            <label>
            First Name
            </label><br/><br/>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width:'90%'}}/>
            </div>
            </Double>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Send Password and login details to user via email." /><br/>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Require user to change password upon login." />

            <div className="submitAdmin_form">
                <Button variant="text" onClick={handleClose}>Cancel</Button>
                <Button variant="contained" style={{marginLeft: 20}} onClick={()=>setMoveToStepTwo(true)}>Next</Button>
            </div>

        </>
    )
}



const Double = styled.div`
display:flex;
justify-content: space-between;
width: 70%;
margin-top: 30px;
`;
export default StepOne