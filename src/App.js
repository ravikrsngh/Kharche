import { useState, useEffect } from 'react';
import './App.css';
import TestAuth from './components/testauth';
import Hero from './pages/hero/hero';
import Register from './pages/register/register';
import Login from './pages/login/login';
import SelectCategory from './pages/selectCategory/selectCategory';
import {AuthProvider} from './context/AuthContext';
import AddExpense from './pages/addExpense/addExpense';
import Dashboard from './pages/dashboard/dashboard';
import Profile from './pages/profile/profile';
import PrivateRoutes from './utils/privateRoutes';
import {auth,db} from './firebaseconfig';
import { onAuthStateChanged } from "firebase/auth";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <AuthProvider>
      <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/select-category" element={<SelectCategory />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/" element={<Hero />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      </Routes>
      </AuthProvider>
    </div>

    </BrowserRouter>
  );
}

export default App;
