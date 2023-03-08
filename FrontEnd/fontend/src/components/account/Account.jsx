import "./account.css";
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Header from "../header/Header";
import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';


export default function Account({name}) {
    const navigate=useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handelreview=()=>{
        navigate('/review')
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));
    return (
        <div>
            
            <Button
                startIcon={<Avatar sx={{ bgcolor: green[500] }} />}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >   <div>{name}</div>
                <ArrowDropDownIcon/>
            </Button>
            <Menu  className="control-menu"
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >   <div className="my--account">Tài khoản của tôi</div>
                <MenuItem onClick={handleClose}>Đơn đặt chỗ của tôi</MenuItem>
                <MenuItem onClick={handleClose}>Hộp thư</MenuItem>
                <MenuItem onClick={handleClose}>Thưởng hoàn tiền mặt</MenuItem>
                <MenuItem onClick={handleClose}>Danh sách yêu thích</MenuItem>
                <StyledBadge badgeContent={4} color="primary" anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}>
                <MenuItem onClick={handelreview}>Nhận xét của tôi</MenuItem>
                </StyledBadge>
                <MenuItem onClick={handleClose}>Hồ sơ của tôi</MenuItem>
                <Divider />
                <button className="account--btn" onClick={()=>{
                    console.log(1111);
                    localStorage.removeItem("tokelogin")
                    window.location.reload()
                }}> Thoát</button>
            </Menu>
        </div>
    );
}
