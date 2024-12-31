import React, { useState } from "react";
import { checkTransactionStatus } from "../api/api";

const CheckStatus = () => {
    const [customOrderId, setCustomOrderId] = useState("");
    const [status, setStatus] = useState("");

    const handleCheckStatus = async () => {
        const { data } = await checkTransactionStatus(customOrderId);
        setStatus(data.status);
    };

    return (
        <div className="container mx-auto mt-4">
            <h2 className="text-2xl font-bold mb-4">Check Transaction Status</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Enter Custom Order ID"
                    value={customOrderId}
                    onChange={(e) => setCustomOrderId(e.target.value)}
                    className="border p-2 mr-2"
                />
                <button onClick={handleCheckStatus} className="bg-blue-600 text-white px-4 py-2">Check Status</button>
            </div>
            {status && <p>Status: {status}</p>}
        </div>
    );
};

export default CheckStatus;




