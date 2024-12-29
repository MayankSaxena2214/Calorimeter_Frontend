import {configureStore} from "@reduxjs/toolkit"
import foodReducer from "../Feature/foodReducer"
import authReducer from "../Feature/userReducer";
const store=configureStore({
    reducer:{
        foods:foodReducer,
        auth:authReducer
    }
})
export default store;