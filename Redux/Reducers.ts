import { createSlice } from "@reduxjs/toolkit";

interface initial_state {
 username : string
}

const initialState: initial_state = {
  username : "",
};

const hiwebslice = createSlice({ 
  name: "hiweb",
  initialState: initialState,
  reducers: {
   userName : (state , {payload} : {payload: string}) => 
   {state.username = payload}
  },
});

export const { userName } = hiwebslice.actions;
export default hiwebslice.reducer;