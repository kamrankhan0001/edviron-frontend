
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








// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar';
// import TransactionsOverview from './pages/Dashboard';
// import SchoolTransactions from './pages/TransactionBySchool';
// import TransactionStatusCheck from './pages/CheckStatus';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         <Navbar />
//         <div className="container mx-auto px-4 py-8">
//           <Routes>
//             <Route exact path="/" component={TransactionsOverview} />
//             <Route path="/school-transactions" component={SchoolTransactions} />
//             <Route path="/status-check" component={TransactionStatusCheck} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

