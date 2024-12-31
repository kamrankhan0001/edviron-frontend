import React, { useState } from "react";
import { fetchTransactionsBySchool } from "../api/api";
import TransactionTable from "../components/TransactionTable";

const TransactionBySchool = () => {
    const [schoolId, setSchoolId] = useState("");
    const [transactions, setTransactions] = useState([]);

    const handleSearch = async () => {
        const { data } = await fetchTransactionsBySchool(schoolId);
        setTransactions(data);
    };

    return (
        <div className="container mx-auto mt-4">
            <h2 className="text-2xl font-bold mb-4">Transactions By School</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Enter School ID"
                    value={schoolId}
                    onChange={(e) => setSchoolId(e.target.value)}
                    className="border p-2 mr-2"
                />
                <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2">Search</button>
            </div>
            <TransactionTable transactions={transactions} />
        </div>
    );
};

export default TransactionBySchool;


