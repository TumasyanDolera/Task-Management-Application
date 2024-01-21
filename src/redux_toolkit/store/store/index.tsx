import {configureStore} from "@reduxjs/toolkit"
import { userAuth } from "../../features/auth"
import { postReducer } from "../../features/user"
import { taskReduser } from "../../features/task"

export const Store = configureStore({
    reducer:{
        taskReduser: taskReduser,
        userAuth: userAuth,
        UserReducer: postReducer,
        
    }
})


export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch