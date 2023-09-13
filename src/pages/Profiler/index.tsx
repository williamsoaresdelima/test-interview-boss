import axios from 'axios'
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Profiler() {
    const [candidate, setCandidate] = React.useState({ name: null, email: null, phoneNumber: null })
    const { id } = useParams()
    const navigate = useNavigate()

    React.useEffect(() => {
        axios.get(`http://localhost:3001/candidates/${id}`).then((res: any) => {
            setCandidate(res.data)
        })
    }, [])

    return (
        <div>
            <button onClick={() => navigate(-1)}>Go back</button>
            <div>{candidate.name}</div>
            <div>{candidate.email}</div>
            <div>{candidate.phoneNumber}</div>
        </div>
    )
}

export default Profiler