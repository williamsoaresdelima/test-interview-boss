import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";

function CandidateCard({ candidate }: any) {
  const navigate = useNavigate();

  const navigateTo = (id: number) => {
    navigate(`/profiler/${id}`);
  };

  const chatWith = (id: number) => {
    navigate(`/chat/${id}`);
  };
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {candidate.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {candidate.email}
        </Typography>
        <Typography variant="body2">{candidate.phoneNumber}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={() => navigateTo(candidate.id)}
          size="small"
        >
          See More
        </Button>
        <Button
          variant="contained"
          onClick={() => chatWith(candidate.id)}
          size="small"
        >
          Chat with {candidate.name}
        </Button>
      </CardActions>
    </Card>
  );
}

export default CandidateCard;
