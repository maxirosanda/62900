import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../features/counterSlice'
import shopReducer from '../features/shopSlice'
import { shopApi } from "../services/shop"
import { ordersApi } from "../services/orders"
import { setupListeners } from "@reduxjs/toolkit/query"
import { authApi } from "../services/auth"
import userReducer from "../features/userSlice"

export const store =  configureStore({
    reducer:{
        counter:counterReducer,
        shop:shopReducer,
        user:userReducer,
        [shopApi.reducerPath]:shopApi.reducer,
        [ordersApi.reducerPath]:ordersApi.reducer,
        [authApi.reducerPath]:authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware,ordersApi.middleware,authApi.middleware),
})

setupListeners(store.dispatch)