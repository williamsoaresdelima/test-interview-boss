import React from "react";
import Candidates from "./pages/Candidates";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profiler from "./pages/Profiler";
import styled from "styled-components";
import Chat from "./pages/Chat";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Candidates />} />
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
