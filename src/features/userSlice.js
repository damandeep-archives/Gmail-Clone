import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user:null,
};




export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user=null;
    },
    login:(state,action)=>{
      state.user=action.payload;
    }
  },
 

});

export const {login,logout } = userSlice.actions;


export const selectUser=(state)=>state.user.user;

export default userSlice.reducer;
