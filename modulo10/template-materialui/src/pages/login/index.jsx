import React, { useState } from 'react';
import { Grid, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const Login = () => {
    const [login, setLogin] = useState("");  
    
    return (
        <Grid container spacing={2}>  
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="login_nome">Login</InputLabel>
                    <Input 
                        id="login_nome" 
                        aria-describedby="login_nome_helper_text" 
                        value={login} 
                        onChange={e => { setLogin(e.target.value) }} 
                    />
                    <FormHelperText id="login_nome_helper_text">Digite seu login.</FormHelperText>
                </FormControl>
            </Grid>
        </Grid>
    );
}

export default Login;
