import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const StepThree = () => {
    return (
        <>
             <strong>Finishing up user role setup</strong>
            <Typography mt={3}>Assigned user settings</Typography>

            <strong style={{marginTop: 30}}>Display and username</strong>

            <Typography mt={3}>Display name: Seyi_O</Typography>

            <Typography mt={3}>Username: seyi_o@astrakash.com</Typography>
            <div style={{display:'flex', marginTop: 30}}>
            <strong style={{ textDecoration: 'underline' }}>Edit </strong>
            <ChevronRightIcon/>
       </div>
       <strong style={{marginTop: 30}}>Password</strong>
            
            <Typography mt={3}>Password details: **********************</Typography>
            <Typography mt={3}>Send To: seyi_o@astrakash.com</Typography>

            <div style={{display:'flex', marginTop: 30}}>
            <strong style={{ textDecoration: 'underline' }}>Edit </strong>
            <ChevronRightIcon/>
       </div>

            <strong>Admin Access </strong>
            <Typography mt={3}>Super Admin</Typography>
            <Typography mt={3}>Stream Management</Typography>
            <Typography mt={3}>Plan Management</Typography>

            <div className="submitAdmin_form">
                <Button variant="text" >Back</Button>
                <Button variant="contained" style={{marginLeft: 20}}>Finish adding</Button>
            </div>

        </>
    )
}


export default StepThree