
import React from "react";

const TransactionTable = ({ transactions }) => {
    // Function to determine the status color
    const getStatusColor = (status) => {
        if (status.toLowerCase() === "success") {
            return "text-green-500"; // Green for success
        }
        return "text-red-500"; // Red for any other status
    };

    return (
        <div className="overflow-x-auto bg-gray-50 p-4 rounded-lg shadow-md">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                <thead>
                    <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                        <th className="py-3 px-6 border-b">SI NO</th>
                        <th className="py-3 px-6 border-b">Collect ID</th>
                        <th className="py-3 px-6 border-b">Gateway</th>
                        <th className="py-3 px-6 border-b">Transaction Amount</th>
                        <th className="py-3 px-6 border-b">Status</th>
                        <th className="py-3 px-6 border-b">Custom Order ID</th>
                        <th className="py-3 px-6 border-b">Bank Reference</th>
                        <th className="py-3 px-6 border-b">Payment Methods</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={transaction.collect_id} className="text-sm text-gray-700">
                            <td className="py-3 px-6 border-b">{index + 1}</td>
                            <td className="py-3 px-6 border-b">{transaction.collect_id}</td>
                            <td className="py-3 px-6 border-b">{transaction.gateway}</td>
                            <td className="py-3 px-6 border-b">{transaction.transaction_amount}</td>
                            <td className={`py-3 px-6 border-b ${getStatusColor(transaction.status)}`}>
                                {transaction.status}
                            </td>
                            <td className="py-3 px-6 border-b">{transaction.custom_order_id}</td>
                            <td className="py-3 px-6 border-b">{transaction.bank_reference}</td>
                            <td className="py-3 px-6 border-b">{transaction.payment_method}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionTable;


