import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:null,
  supportRoom:{},
 
 
}

export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    
    userSignin: (state, action) => {
      state.user= action.payload;
     
    },
    userSignout: (state) => {
        state.user= null;
    },
    storeSupportRoom: ( state, action ) => {
      const room= action.payload;

      state.supportRoom= {...state.supportRoom,[room]: room };
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { userSignin, userSignout, storeSupportRoom } = userSlice.actions

export default userSlice.reducer