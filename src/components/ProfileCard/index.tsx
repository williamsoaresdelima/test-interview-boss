import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";

function ProfileCard({ profile }: any) {
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
          {profile.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {profile.email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {profile.description}
        </Typography>
        <Typography variant="body2">{profile.phoneNumber}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={() => navigateTo(profile.id)}
          size="small"
        >
          See Profile
        </Button>
        <Button
          variant="contained"
          onClick={() => chatWith(profile.id)}
          size="small"
        >
          Chat with {profile.name}
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProfileCard;
