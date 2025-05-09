import React from 'react'
import { jwtDecode } from "jwt-decode";

function Dashboard() {
     localStorage.getItem("currentUser");
       const user = localStorage.getItem("currentUser");
  console.log("user", user);
  const decode = jwtDecode(user);
  console.log("decode", decode.username);
  return (
    <div>
      DashBoard
           <h1>Token:{}</h1>
    </div>
  )
}

export default Dashboard