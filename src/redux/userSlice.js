
import { createSlice} from '@reduxjs/toolkit';
const initialState ={
    users: [
      {name: 'sai', email: 'sai@gmail.com', password: 'sai123' },
      { name: 'satish', email: 'satish@gmail.com', password: 'satish123'},
      { name: 'srinu', email: 'srinu@gmail.com', password: 'srinu123' },
      {name: 'a', email:'a@gmail.com', password: 'a' },
      
    ],
  };
  

const userSlice = createSlice({
  name: 'user',
  initialState,
  // reducers: {
  //   // setUserDetails: (state, action) => {
  //     // state.users.push(action.payload); 
  //   },
  },
);

export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;
