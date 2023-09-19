import React, { useState } from 'react'

function Login() {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
    return (
    <div>
        <label>Email</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
        <br/>
        <label>Password</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>
        <br/>
        <button>Log in</button>
    </div>
  )
}

export default Login