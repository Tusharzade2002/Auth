import React, { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { authregister } from "../Store/AuthThunk";
import { useNavigate } from "react-router-dom";
function Register() {
  const [formData, setformdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleregister = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(authregister(formData)).unwrap();
      console.log(response.data);
      return response.data;
     
    } catch (err) {
      console.log("errror");
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
   <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
  <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
    <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>

    <div className="flex flex-col gap-4">
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

      <button
        onClick={handleregister}
        className="bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
      >
        Register
      </button>
    </div>
  </div>
</div>

  );
}

export default Register;
