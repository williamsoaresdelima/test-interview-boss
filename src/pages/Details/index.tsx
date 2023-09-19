import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProfileDetails() {
    const [profile, setProfile] = useState<any>({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getProfile = async (): Promise<any> => {
            const profile = await axios.get(`http://localhost:3333/v1/profiles/${id}`)
            setProfile(profile.data)
        }
        getProfile()
    }, [])
    return (
        <div>
            <div>{profile.name}</div>
            <div>{profile.email}</div>
            <div>{profile.phoneNumber}</div>
            <div>{profile.description}</div>
            <img src={profile.photo} style={{ height: '100px', width: '100px' }} />
            <button onClick={() => navigate(`/`)}>Go back to list</button>
        </div>
    )
}

export default ProfileDetails