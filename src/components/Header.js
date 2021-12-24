import React from "react"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NotificationsActiveSharpIcon from '@mui/icons-material/NotificationsActiveSharp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useHistory } from 'react-router';



const ITEM_HEIGHT = 48;

const Header = () => {
  const history = useHistory()
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    console.log('yes')
    history.push('/')
  };
    return (
        <div className="header_wrap">
            <div className="header_name">
                <p>System Settings</p>
            </div>
                <div className="header_user">
                <NotificationsActiveSharpIcon className="svg_icons"/>
                <div className="notify">
                    <div className="userImage">

                    </div>
                    <p>Seyi Martinz</p>
                    <span style={{marginTop: 8}}>
                        < ArrowDropDownIcon onClick={handleClick} style={{cursor:'pointer'}}/>
          <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
          <MenuItem onClick={handleClose}>
            Logout
          </MenuItem>
      </Menu>
        </span>
        </div>
        </div>
        </div>
    )
}


export default Header