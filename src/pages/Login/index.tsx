import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { login } from '../../services/auth'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const callLogin = async () => {
        const {data} = await login(email, password)
        console.log(data)
        localStorage.setItem("token", data.access_token)
        localStorage.setItem("profiler", data.profiler)
        
    }

    return (
        <div>
            <TextField
                required
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                id="email"
                label="Email"
                type="Email"
            />
            <TextField
                required
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                id="password"
                label="Password"
                type='password'
            />
            <Button variant="contained" onClick={() => callLogin()}>
                Send
            </Button>
        </div>
    )
}

export default LoginPage