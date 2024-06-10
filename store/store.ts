import { configureStore,combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import cartSlice from "./slices/cartSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
const persistConfig = {
  key:"root",
  version:1,
  storage
}
const reducer = combineReducers({
  counter:counterSlice,
  cart:cartSlice

})
const persistedReducer = persistReducer(persistConfig,reducer)
const store = configureStore({
    reducer: {
      reducer:persistedReducer
      
      //Slices
      
     
    },
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

//monitor counterslice
//cartslice