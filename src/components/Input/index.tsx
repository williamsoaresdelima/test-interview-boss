import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CandidatesService from "../../services/candidates";

function Input({ send }: { send: (value: string) => void }) {
  const [value, setValue] = useState("");
  const [candidate, setCandidate] = React.useState({
    name: null,
    email: null,
    phoneNumber: null,
  });
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      CandidatesService.GetById(+id).then((res: any) => {
        setCandidate(res.data);
      });
    }
  }, [id]);
  return (
    candidate && (
      <>
        <TextField
          id="filled-basic"
          label={`Chat with ${candidate.name}`}
          variant="filled"
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="type your message... "
          value={value}
        />
        <Button variant="contained" onClick={() => send(value)}>
          Send
        </Button>
      </>
    )
  );
}

export default Input;
