

import { createSlice } from '@reduxjs/toolkit';
// const initialState={
//     value:0,
//     items:{},
// }
const cartSlice=createSlice({
  name: 'cart',
  initialState:
   {

            value: 0,

    items: {},
  },
  reducers: {
    toggleItem: (state,action) => {
    
            const index = action.payload;
      if(state.items[index]) {
       //event.preventDefault()
delete state.items[index];
            state.value -= 1;
      }
      
    else{
 state.items[index] = true;
         state.value += 1;
      }
  
    },
  },
});


export const {toggleItem }=cartSlice.actions;

export default cartSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: {},
//     value: 0
//   },
//   reducers: {
//     toggleCartItem: (state, action) => {
//       const index= action.payload;
//       if (state.items[index]) {
//         delete state.items[index];
//         state.value -= 1;
//       } else {
//         state.items[index] = true;
//         state.value += 1;
//       }
//     }
//   }
// });

// export const { toggleItem } = cartSlice.actions;
// export default cartSlice.reducer;
