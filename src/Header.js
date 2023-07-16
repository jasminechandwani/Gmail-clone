import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () =>{
        auth.signOut().then(() => {
            dispatch(logout());
        })
    }
  return (
    <div className='header'>
        <div className='header__left'>
           <IconButton> <MenuIcon/> </IconButton> 
           <img src='https://www.citypng.com/public/uploads/preview/-11597272377xtovj4zmfl.png'
           alt=''/>
        </div>

        <div className='header__middle'>
            <SearchIcon className='header__search'/>
            <input placeholder='Search mail' type='text'/>
            <ArrowDropDownIcon className='header__input' />
        </div>

        <div className='header__right'>
            <IconButton> 
                <AppsIcon/> 
            </IconButton>

            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <Avatar onClick={signOut} src={user?.photoUrl}/>
        </div>
      
    </div>
  )
}

export default Header
