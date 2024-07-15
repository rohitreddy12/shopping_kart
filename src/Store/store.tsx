import { configureStore, createReducer } from "@reduxjs/toolkit";
import { cartReducer, favReducer } from "./reducers";


const store = configureStore(
    {
        reducer:{
        cart: cartReducer,
        favourites:favReducer
    }
}
)

export type RootState = ReturnType<typeof store.getState>

export default store