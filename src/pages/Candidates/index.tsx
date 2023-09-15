import React, { useState } from "react";

import * as S from "./style";
import { Box } from "@mui/material";
import CandidateCard from "../../components/CandidateCard";
import CandidateService from "../../services/candidates";

function Candidates() {
  const [candidates, setCandidates] = useState([]);

  React.useEffect(() => {
    CandidateService.GetAll().then((res: any) => {
      setCandidates(res.data);
    });
  }, []);

  return (
    <S.Container>
      <Box>
        {candidates.length &&
          candidates.map((candidate: any) => {
            return (
              <CandidateCard key={candidate.id} candidate={{ ...candidate }} />
            );
          })}
      </Box>
    </S.Container>
  );
}

export default Candidates;
