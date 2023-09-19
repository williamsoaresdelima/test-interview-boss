import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ProfileList() {
    const [users, setUsers] = useState<any[]>([])
    const navigate = useNavigate()


    useEffect(() => {
        const getProfiles = async (): Promise<any> => {
            const profiles = await axios.get("http://localhost:3333/v1/profiles")
            setUsers([...users, ...profiles.data])
        }
        getProfiles()
    }, [setUsers])

    return (
        <div>
            {users ? users.map((user) => {
                return (
                    <div key={user.id}>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                        <div>{user.phoneNumber}</div>
                        <div>{user.description}</div>
                        <img src={user.photo} style={{height: '100px', width: '100px'}}/>
                        <button onClick={() => navigate(`/chat/${user.id}`)}>Chat with {user.name}</button>
                        <button onClick={() => navigate(`/profile/${user.id}`)}>See more...</button>
                        <br/>
                    </div>
                )
            }) : null}
        </div>
    );
}

export default ProfileList