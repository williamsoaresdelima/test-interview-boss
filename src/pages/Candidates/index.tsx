import React from 'react'

import CandidateCard from '../../components/CandidateCard'
import * as S from "./style"
import axios from 'axios'

function Candidates() {
    const [candidates, setCandidates] = React.useState([])
    React.useEffect(() => {
        axios.get('http://localhost:3001/candidates').then((res: any) => {
            setCandidates(res.data)
        })
    }, [])


    return (
        <S.Container>
            {
                candidates.length &&
                candidates.map((candidate: any) => {
                    return <CandidateCard key={candidate.id} candidate={{ ...candidate }} />
                }
                )
            }
        </S.Container>
    )
}

export default Candidates