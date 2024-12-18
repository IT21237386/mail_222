import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './page/mainPage';
import SigninPage from './page/signinPage';
import AdminDashboard from './page/admin/adminDashboardPage';
import EmployeeDashboard from './page/employee/employeeDashboard';
import Mailbox from "./page/employee/mailbox";



function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={< MainPage/>} />
        <Route path="/login" element={<SigninPage/>} />

        {/* Admin-Side Routes */}
        <Route path="/admin-Dashboard" element={<AdminDashboard/>} />

       

        {/* Employee-Side Routes */}
        <Route path="/employee-dashboard" element={<EmployeeDashboard/>}/>

        <Route path="/mailbox" element={<Mailbox />} /></Routes>




    </Router>
  );
}

export default App;
