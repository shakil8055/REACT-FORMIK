import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Components/Create";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Edit from "./Components/Edit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#0fb9b1]">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/details/:id" element={<Details />} />
            <Route path="/dashboard/:id/edit" element={<Edit />} />
            <Route path="/create" element={<Create />} />
            
          </Routes>
          </div>
        
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;