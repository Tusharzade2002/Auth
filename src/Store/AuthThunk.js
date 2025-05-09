import {createAsyncThunk}  from "@reduxjs/toolkit"
import axios from "axios"

export const authregister=createAsyncThunk("auth/authregister",async(formdata,thunkAPI) => {
     try{
        const response = await axios.post("http://localhost:5000/api/auth/register",formdata);
        return response;
        console.log(response);
     }catch(err){
         return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Registration failed"
      );
     }
})