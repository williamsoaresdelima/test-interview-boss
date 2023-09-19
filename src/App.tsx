import React from "react";
import ProfileList from "./pages/Profiles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/Chat";
import ProfileDetails from "./pages/Details";
import Login from "./pages/Login";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<ProfileList/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile/:id" element={<ProfileDetails/>}/>
          <Route path="/chat/:id" element={<ChatPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
