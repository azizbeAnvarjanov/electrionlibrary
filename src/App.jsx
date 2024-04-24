import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Navbar from "./_components/Navbar";
import Login from "./auth/Login";
import Register from "./auth/Register";
import BoookDetails from "./pages/BoookDetails";

import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import CreateNewBook from "./pages/CreateNewBook";

const App = () => {
  const [user, setUser] = useState(null);
  
  
  useEffect(() => {
      onAuthStateChanged(auth,(data) => {
        setUser(data?.email);
      })
  },[])


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {
          !user && <Route path="/" element={<Login />} />
        }
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateNewBook />} />
        <Route path="/book/:id" element={<BoookDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
