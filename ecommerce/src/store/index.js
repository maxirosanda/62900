import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../features/counterSlice'
import shopReducer from '../features/shopSlice'

export default configureStore({
    reducer:{
        counter:counterReducer,
        shop:shopReducer
    }
})