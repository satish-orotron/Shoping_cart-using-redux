

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: 0,
    items: {},
  },
  reducers: {
    toggleItem: (state, action) => {
      const valuei = action.payload;
      if (state.items[valuei]) {
        delete state.items[valuei];
        state.value -= 1;
      } else {
           state.items[valuei] = true;
        state.value += 1;
      }
    },
  },
});

export const { toggleItem }=cartSlice.actions;

export default cartSlice.reducer;