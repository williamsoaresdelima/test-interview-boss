import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  FormLabel,
  Grid,
  Link,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { login, signUp } from "../../services/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [type, setType] = useState("CANDIDATE");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const profiler = {
      email,
      password,
      name,
      description,
      phoneNumber,
      type,
    };
    await signUp(profiler)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box
          onSubmit={() => handleSubmit()}
          component="form"
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="name"
            label="Name"
            type="text"
            id="name"
            autoComplete="current-name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="description"
            label="description"
            type="text"
            id="description"
            autoComplete="current-description"
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="phoneNumber"
            label="Phone Number"
            type="text"
            id="phoneNumber"
            autoComplete="current-phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.currentTarget.value)}
          />
          <FormLabel>Role</FormLabel>
          <RadioGroup
            onChange={(e) => setType(e.target.value)}
            defaultValue="CANDIDATE"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="CANDIDATE"
              control={<Radio />}
              label="Candidate"
            />
            <FormControlLabel
              value="RECRUITER"
              control={<Radio />}
              label="Recruiter"
            />
          </RadioGroup>
          <Button
            onClick={() => handleSubmit()}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link onClick={() => navigate("/login")} variant="body2">
                {"Already have a account? Log in"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Register;
