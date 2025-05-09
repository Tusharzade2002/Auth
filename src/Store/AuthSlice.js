import { createSlice } from "@reduxjs/toolkit";
import {authregister} from "./AuthThunk"
const initialState={
    data:null,
 loading:false,
    error:null,
  filter: ''
}
const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;

      localStorage.removeItem("users");
    },
  },
  extraReducers:(Builder)=>{
    Builder
    .addCase(authregister.pending,(state)=>{
      state.status ="loading"
    })
    .addCase(authregister.fulfilled,(state,action)=>{
        state.status="succedded",
        state.auth = action.payload
    })
    .addCase(authregister.rejected,(state,action)=>{
          state.status="failed",
          state.error = action.error.message
    })
  }

})
export const  setFilter  = AuthSlice.actions;
export default AuthSlice.reducer;