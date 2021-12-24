import React, {useState} from "react"
import styled from "styled-components"
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import check from '../assets/check.svg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';



const AdminInfo = () => {
const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword(!showPassword);
const handleMouseDownPassword = () => setShowPassword(!showPassword);
const [changePass, setChangePass] = useState(false)

    return (
        <div>
           <strong>Privacy and Security</strong>
            <p>Adipiscing congue enim id mattis velit</p>
            

            <div className="privacy_form">
            <Password>
            <label>
            Password
            </label><br/><br/>
            <TextField
  label='Some label'
  variant="outlined"
  type={showPassword ? "text" : "password"} // <-- This is where the magic happens
  InputProps={{ // <-- This is where the toggle button is added.
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    )
  }}
  style={{ width: '70%' }}
/>
                    <div style={{marginTop: 30, display:'flex', cursor:'pointer'}} onClick={()=>setChangePass(true)}>
                        {changePass === false ? (
                            <>
                            <strong style={{ textDecoration: 'underline' }}>Change Password </strong>
                            <ChevronRightIcon/>
                            </>
                        ): (
                                <div style={{ width: '70%' }}>
                                    <hr/><br/>
                                <label>
                                New Password
            </label><br/><br/>
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{ width: '100%' }} />
                                    <br/><br/>
                                    <label>
                                    Confirm Password
            </label><br/><br/>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{ width: '100%' }} />
                            </div>
                      )}
                    </div>
            </Password>
                <AccessLevel>
                    <strong>Permission and Access Level Status</strong><br/><br/>
                    <p style={{color:'#ABABAB'}}>Admin Role</p>
                    <span style={{display:'flex'}}>
                        <p>Super Admin</p>
                        <img src={check} alt="check" style={{ marginLeft: 30}}/>
                    </span><br/><br/>
                    <p style={{color:'#ABABAB'}}>Admin Permission</p>
                    <p>Full Access</p>
                </AccessLevel>
            </div>

            <div className="submitAdmin_form">
                <Button variant="text" >Cancel</Button>
                <Button variant="contained" style={{marginLeft: 20}}>Save Changes</Button>
            </div>
       </div>

    )
}



const Password = styled.div`
width: 50%;
height: 300px;
padding: 15px;
`;

const AccessLevel = styled.div`
width: 50%;
height: 300px;
`;
export default AdminInfo




