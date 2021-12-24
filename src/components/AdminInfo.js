import React from "react"
import styled from "styled-components"
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';


const AdminInfo = () => {
    return (
        <div>
        <strong>Admin Information</strong>
            <p>Adipiscing congue enim id mattis velit</p>
            <div className="admin_form">
            <div className="form_div">
            <TextDiv>
            <SingleForm>
            <label>
            First Name
            </label><br/><br/>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width:'100%'}}/>
            </SingleForm>
            <SingleForm>
            <label>
            Last Name
            </label><br/><br/>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width:'100%'}}/>
            </SingleForm>
                    </TextDiv>
                    <TextDiv>
            <SingleForm>
            <label>
            Phone Number
            </label><br/><br/>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width:'100%'}}/>
            </SingleForm>
            <SingleForm>
            <label>
            Email Address
            </label><br/><br/>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width:'100%'}}/>
            </SingleForm>
            </TextDiv>
            </div>
                <div className="image_div">
                <PersonDiv>
                <PersonIcon className="person_iconForm"/>
                </PersonDiv>
                </div>
            </div>

            <div className="submitAdmin_form">
                <Button variant="text" >Cancel</Button>
                <Button variant="contained" style={{marginLeft: 20}}>Save Changes</Button>
            </div>
        </div>
    )
}

const TextDiv = styled.div`
display: flex;
justify-content: space-between;
height: 130px;
`;


const SingleForm = styled.div`
width: 45%;
padding: 15px 0px 15px 0px;
`;

const PersonDiv = styled.div`
width: 180px;
height: 180px;
border-radius: 50%;
border: 1px solid #000000;
display: flex;
justify-content: center;
align-items:center;
`;
export default AdminInfo