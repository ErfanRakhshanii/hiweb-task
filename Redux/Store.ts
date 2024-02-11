import { configureStore } from "@reduxjs/toolkit";
import Reducers from "./Reducers";
 export const store = configureStore({
    reducer: {
        Reducers: Reducers
    }
 })

 export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store