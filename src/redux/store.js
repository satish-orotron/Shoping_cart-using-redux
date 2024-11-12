


import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
// //import cartSlice from './cartSlice'
// //import productReducer from "./productsSlice";
// //import cartReducer from './cartSlice';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cartSlice';
import sessionStorage from 'redux-persist/es/storage/session';
import userReducer from './userSlice';


const persistConfig = {
  key:'root',

   storage,
   // sessionStorage
  //whitelist:['cart'],
};


const rootReducer=combineReducers({
         user: userReducer,
  cart: cartReducer,
});


const persistedReducer=persistReducer(persistConfig,rootReducer);


const store = configureStore({
  
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;








