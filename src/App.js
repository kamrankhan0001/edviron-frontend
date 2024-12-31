
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import TransactionBySchool from "./pages/TransactionBySchool";
import CheckStatus from "./pages/CheckStatus";
//import Pagination from './components/Pagination';

const App = () => {
    return (
        <Router>
            
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/transactions-by-school" element={<TransactionBySchool />} />
                <Route path="/check-status" element={<CheckStatus />} />
            </Routes>
        </Router>
    );
};

export default App;










