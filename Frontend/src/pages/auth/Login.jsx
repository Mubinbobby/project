import React from 'react'
import TextField from '@mui/material/TextField';

const AuthLogin = () => {
  return (
    <div className='bg-warning align-items-center'>
        <h4 className='align-items-center'>Login</h4> <br />
        <TextField
          id="outlined-required"
          label="Username"
        /> <br /> <br />
        <TextField
          id="outlined-required"
          label="Password"
        />
    </div>
  )
}

export default AuthLogin
