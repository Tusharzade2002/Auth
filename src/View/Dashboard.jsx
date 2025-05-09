import React from "react";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Dashboard() {
const navigate = useNavigate()
  const handlelogout=()=>{
        localStorage.clear()
        toast.success("Logout Successfulyy..")
        setTimeout(()=>{
           navigate("/login")
        })
  }
  const token =localStorage.getItem("currentuser")
  if(!token){
           toast.error("First Loggin .. Redirecting Login")   
           setTimeout(()=>{
              navigate("/login")
           },3000)  
  }
  
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-purple-400 p-4">
   
      <h1 className="text-2xl">Welcome To DashBoard....</h1>
      <div><button className="bg-stone-500 px-8 py-2 rounded-md mt-8" onClick={handlelogout}>Logout</button></div>
    </div>
  );
}

export default Dashboard;
