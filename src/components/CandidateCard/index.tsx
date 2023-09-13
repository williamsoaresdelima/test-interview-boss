import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './style'

function CandidateCard({candidate}: any) {
    const navigate = useNavigate()
    
    const navigateTo = (id: number) => {
        navigate(`/profiler/${id}`)
    }
    return (
        <S.Container>
            <div onClick={() => navigateTo(candidate.id)}>{candidate.name}</div>
            <div>{candidate.email}</div>
            <div>{candidate.phoneNumber}</div>
        </S.Container>
    )
}

export default CandidateCard