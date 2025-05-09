import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authregister } from "../Store/AuthThunk";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import signin from "../assets/Sign up-amico.png";
function Register() {
  const [formData, setformdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    if (password.length < 8) {
      return "At least 8 characters required.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Include at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Include at least one lowercase letter.";
    }
    if (!/[0-9]/.test(password)) {
      return "Include at least one number.";
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return "Include at least one special character.";
    }
    return "";
  };
  const handleregister = async (e) => {
    e.preventDefault();
    setError("");

    const pwdError = validatePassword(formData.password);
    if (pwdError) {
      setPasswordError(pwdError);
      return;
    }
    try {
      if (!error) {
        const response = await dispatch(authregister(formData)).unwrap();
        console.log(response.data);
        setError("");
        toast.success("Register successfully..");
        setformdata({
          name: "",
          email: "",
          password: "",
        });
        return response.data;
      } 
    } catch (err) {
      console.log("errror");
      setError(err);
      toast.error("Error While Registration.....");
    }

    setformdata({
      name: "",
      email: "",
      password: "",
    });
  };
//       useEffect(() => {
//     setTimeout(() => {
//       navigate("/login");
//     }, [3000]);

//   }, [handleregister]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-400 p-4">
      <div className="flex bg-white px-20 py-10 rounded-xl shadow-lg ">
        <div className="me-10">
          <img className="h-80 w-[450px] " src={signin} />
        </div>
        <div className="w-full max-w-md ">
          <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
          <div className="flex flex-col gap-4">
            {error && (
              <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
                {error}
              </div>
            )}
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border rounded-md p-2 text-base"
                value={formData.name}
                onChange={(e) =>
                  setformdata({ ...formData, [e.target.name]: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border rounded-md p-2 text-base"
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
                className="border rounded-md p-2 text-base"
                value={formData.password}
                onChange={(e) =>
                  setformdata({ ...formData, [e.target.name]: e.target.value })
                }
              />
            </div>
            {passwordError && (
              <p className="text-red-600 text-sm mt-1">{passwordError}</p>
            )}
            <button
              onClick={handleregister}
              className="bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Register;
