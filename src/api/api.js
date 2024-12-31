// import axios from "axios";

// const API = axios.create({
//     baseURL: "http://localhost:5000/api",
// });

// export const fetchTransactions = () => API.get("/transactions");
// export const fetchTransactionsBySchool = (schoolId) => API.get(`/transactions/${schoolId}`);
// export const checkTransactionStatus = (customOrderId) =>
//     API.post("/transactions/check-status", { custom_order_id: customOrderId });



import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
});

export const fetchTransactions = () => API.get("/transactions");
export const fetchTransactionsBySchool = (schoolId) => API.get(`/transactions/${schoolId}`);
export const checkTransactionStatus = (customOrderId) =>
    API.post("/transactions/check-status", { custom_order_id: customOrderId });

// New API function to fetch all schools
export const fetchAllSchools = () => API.get("/schools");
