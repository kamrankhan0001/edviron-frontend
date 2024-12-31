import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-white text-lg font-bold">School Payment Dashboard</h1>
                <div className="space-x-4">
                    <Link to="/" className="text-white">Dashboard</Link>
                    <Link to="/transactions-by-school" className="text-white">Transactions by School</Link>
                    <Link to="/check-status" className="text-white">Check Status</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


