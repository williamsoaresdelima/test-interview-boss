import React from 'react';
import Candidates from './pages/Candidates';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Profiler from './pages/Profiler';
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path='/' element={<Candidates />} />
          <Route path='/profiler/:id' element={<Profiler />} />
        </Routes>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
`
const Menu = styled.div`

`

export default App;