
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./View/Register";
import Login from "./View/Login";
import Dashboard from "./View/Dashboard";

function App() {
 
  return (
    
       <BrowserRouter>
    <Routes>

      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard />} />   
    </Routes>
  </BrowserRouter>
  );
}

export default App;
