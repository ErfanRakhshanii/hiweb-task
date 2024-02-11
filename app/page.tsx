"use client"
import store from "@/Redux/Store";
import { GlobalStyle } from "@/StyledComponents/globalStyles";
import LandingPage from "@/components/LandingPage/LandingPage";
import Login from "@/components/Login/Login";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";

export default function page() {
  const [login , setLogin] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem('accesstoken')){
      setLogin(true)
    }else{
      setLogin(false)
    }
  },[login])
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        {!login?<Login l={setLogin}/>:<LandingPage l={setLogin}/>}
      </Provider>
    </>
  );
}
