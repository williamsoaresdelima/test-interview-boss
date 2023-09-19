import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Input(
  {send}: {send: any}
) {
  const [value, setValue] = useState('')
  const [profile, setProfile] = useState<any>({})
  const { id } = useParams()

  useEffect(() => {
    const getProfile = async (): Promise<any> => {
      const profile = await axios.get(`http://localhost:3333/v1/profiles/${id}`)
      setProfile(profile.data)
    }
    getProfile()
  }, [])
  return (
    <>
      <div>Chat with {profile.name}</div>
      <input type='text' value={value} placeholder='type your message...' onChange={(e) => setValue(e.currentTarget.value)} />
      <button onClick={() => send(value)}>Send</button>
    </>
  )
}

export default Input