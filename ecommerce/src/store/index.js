import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../features/counterSlice'
import shopReducer from '../features/shopSlice'
import { shopApi } from "../services/shop"
import { ordersApi } from "../services/orders"
import { setupListeners } from "@reduxjs/toolkit/query"
import { authApi } from "../services/auth"
import userReducer from "../features/userSlice"
import { userApi } from "../services/user"

export const store =  configureStore({
    reducer:{
        counter:counterReducer,
        shop:shopReducer,
        user:userReducer,
        [shopApi.reducerPath]:shopApi.reducer,
        [ordersApi.reducerPath]:ordersApi.reducer,
        [authApi.reducerPath]:authApi.reducer,
        [userApi.reducerPath]:userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware,ordersApi.middleware,authApi.middleware,userApi.middleware),
})

setupListeners(store.dispatch)