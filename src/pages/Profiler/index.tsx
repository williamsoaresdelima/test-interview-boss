import React from "react";
import { Card, CardContent } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ProfilesService from "../../services/Profiles";

function Profiler() {
  const [candidate, setCandidate] = React.useState({
    name: null,
    email: null,
    phoneNumber: null,
  });
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (id) {
      ProfilesService.GetById(+id).then((res: any) => {
        setCandidate(res.data);
      });
    }
  }, [id]);

  return (
    <Card sx={{ minWidth: 575 }} variant="outlined">
      <CardContent>
        <button onClick={() => navigate(-1)}>Go back</button>
        <div>{candidate.name}</div>
        <div>{candidate.email}</div>
        <div>{candidate.phoneNumber}</div>
      </CardContent>
    </Card>
  );
}

export default Profiler;
