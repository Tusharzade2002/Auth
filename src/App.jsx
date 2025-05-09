import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [formData,setformdata]=useState({
    name:"",
    email:"",
    password:""
  })
  return (
    <div className="flex justify-center items-center w-full h-100vh">
      <div className="flex flex-col">
        <div className="flex flex-col ">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border rounded-md p-2 py-1 text-xl"
            value={formData.name}
            onChange={(e)=>setformdata({...formData,[e.target.name]:e.target.value})}
          />
        </div>
        
        <div className="flex flex-col">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border rounded-md p-2 py-1 text-xl"
            value={formData.email}
            onChange={(e)=>setformdata({...formData,[e.target.name]:e.target.value})}

          />
        </div>

        <div className="flex flex-col">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border rounded-md p-2 py-1 text-xl"
            value={formData.password}
           onChange={(e)=>setformdata({...formData,[e.target.name]:e.target.value})}

          />
        </div>
      </div>
    </div>
  );
}

export default App;
