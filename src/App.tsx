import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profiler from "./pages/Profiler";
import styled from "styled-components";
import Chat from "./pages/Chat";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/profiler/:id" element={<Profiler />} />
          <Route path="/chat/:id" element={<Chat />} />
        </Routes>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
`;

export default App;
