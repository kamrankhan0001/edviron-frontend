import React, { useEffect, useState } from "react";
import axios from "axios";
import TransactionTable from "../components/TransactionTable";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getTransaction");
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchData();
  }, []); // Added dependency array to avoid infinite re-renders

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4">Transactions Overview</h2>
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default Dashboard;







