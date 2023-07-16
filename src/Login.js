import React from 'react';
import './Login.css'
import { Button } from '@mui/material';
import { auth, provider } from './firebase';
import {useDispatch} from 'react-redux'
import { login } from './features/userSlice';

function Login() {
    const dispatch = useDispatch()

    const signIn = () => {
       auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        })
        .catch(error => alert(error.message))
    }
  return (
    <div className='login'>
        <div className='login__container'>
            <img src='https://cdn.vox-cdn.com/thumbor/poDiPWB_ZM1VtgA-FclJVc-Hrl4=/0x0:1320x880/2000x1333/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg'
            alt=''
            />

            <Button 
            variant='contained'
            color='primary'
            onClick={signIn}>Login</Button>
        </div>
      
    </div>
  )
}

export default Login
