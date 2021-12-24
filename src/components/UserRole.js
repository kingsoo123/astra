import React, {useState} from 'react'
import PersonIcon from '@mui/icons-material/Person';
import styled from "styled-components"
import Button from '@mui/material/Button';
import AddUserModal from '../elements/AdduserModal';
import ActiveUsers from './ActiveUsers';


const UserRole = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [activeUsers, setActiveUsers] = useState(true)
    

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                <strong>User Permission</strong>
            <p>Adipiscing congue enim id mattis velit</p>
                </span>
                {activeUsers === true ? (
                    <Button variant="contained" style={{marginTop: 20}} onClick={handleOpen}>+  Add New User</Button>
                ) : ""}
            </div>

            {activeUsers === true ? ( <ActiveUsers/>) : (
                <div className="user_wrap">
            <div className="image_div_add_user">
                <PersonDiv>
                <PersonIcon className="person_iconForm"/>
                </PersonDiv>
                </div>
                <strong>You don’t have any assigned user. Assign a new user</strong>
                <Button variant="contained" style={{marginTop: 20}} onClick={handleOpen}>+  Add New User</Button>
            </div>
            )}

            <AddUserModal handleOpen={handleOpen} open={open} setOpen={ setOpen}/>
        </div>
    )
}
const PersonDiv = styled.div`
width: 180px;
height: 180px;
border-radius: 50%;
border: 1px solid #000000;
display: flex;
justify-content: center;
align-items:center;
`;
export default UserRole;