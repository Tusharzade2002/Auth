import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authlogin } from "../Store/AuthThunk";
import { useNavigate } from "react-router-dom";
function Login() {
  const [formData, setformdata] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const user = await dispatch(authlogin(formData)).unwrap();
       localStorage.setItem("currentuser", JSON.stringify(user));
      console.log(user);
      setformdata({
        email:"",
        password:""
      })
       setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (err) {
      console.log("errror");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
  <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
    <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login</h1>

    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label className="mb-1 text-gray-700">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border rounded-md p-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.email}
          onChange={(e) =>
            setformdata({ ...formData, [e.target.name]: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-gray-700">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border rounded-md p-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.password}
          onChange={(e) =>
            setformdata({ ...formData, [e.target.name]: e.target.value })
          }
        />
      </div>

      <button
        onClick={handlelogin}
        className="bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
      >
        Login
      </button>
    </div>
  </div>
</div>

  );
}

export default Login;
