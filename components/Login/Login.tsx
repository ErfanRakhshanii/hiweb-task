"use client";
import {
  BodyLeft,
  BodyLeftInputField,
  BodyLeftInputFieldButton,
  BodyLeftInputFieldInputBox,
  BodyLeftInputFieldInputBoxInput,
  BodyLeftInputFieldInputBoxSpan,
  BodyLeftInputFieldSelectBoxField,
  BodyLeftInputFieldSelectBoxFieldSelectBox,
  BodyLeftInputFieldSelectBoxFieldSpan,
  BodyLeftLogo,
  BodyRight,
  Container,
} from "@/StyledComponents/LoginStyles/LoginStyles";
import rectangle from "../../public/assets/LoginPics/Rectangle.png";
import haiwebLogo from "../../public/assets/LoginPics/HaiwebLogo.png";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../Loading";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
import { userName } from "@/Redux/Reducers";

export default function Login({l}:{l: React.Dispatch<React.SetStateAction<boolean>>}) {
  const dispatch = useDispatch()
  const username = useSelector((state: RootState) => state.Reducers.username)
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  async function userLogin() {
    setLoading(true)
    try {
      const response = await fetch(
        "https://taskapi.hiweb.ir/api/Security/UserLogin/Login",
        {
          method: "POST",
          body: JSON.stringify({
            userName: username,
            passWord: password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      localStorage.setItem("accesstoken", result.data.accessToken.access_token);
      localStorage.setItem(
        "refreshtoken",
        result.data.accessToken.refresh_token
      );
      localStorage.setItem(
        "expirerefreshtoken",
        result.data.accessToken.expire_refresh_token
      );
      localStorage.setItem(
        "expireaccesstoken",
        result.data.accessToken.expire_access_token
      );
      localStorage.setItem("username", result.data.userName);
      console.log(result);
      l(true)
      router.push("/");
    } catch (error) {
      console.error("Error:", error);
    }finally{
      setLoading(false)
    }
  }

  return (
    <Container>
      <BodyRight>
        <Image src={rectangle} alt="Rectangle" width={800} height={600}></Image>
      </BodyRight>
      <BodyLeft>
        <BodyLeftLogo>
          <Image src={haiwebLogo} alt="Logo"></Image>
        </BodyLeftLogo>
        {loading === false ?  <BodyLeftInputField>
          <BodyLeftInputFieldInputBox>
            <BodyLeftInputFieldInputBoxSpan>
              نام کاربری
            </BodyLeftInputFieldInputBoxSpan>
            <BodyLeftInputFieldInputBoxInput
              placeholder="نام کاربری..."
              value={username}
              onChange={(e) => {
                dispatch(userName(e.target.value));
              }}
            ></BodyLeftInputFieldInputBoxInput>
          </BodyLeftInputFieldInputBox>
          <BodyLeftInputFieldInputBox>
            <BodyLeftInputFieldInputBoxSpan>
              کلمه عبور
            </BodyLeftInputFieldInputBoxSpan>
            <BodyLeftInputFieldInputBoxInput
              placeholder="کلمه عبور..."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></BodyLeftInputFieldInputBoxInput>
          </BodyLeftInputFieldInputBox>
          <BodyLeftInputFieldSelectBoxField>
            <BodyLeftInputFieldSelectBoxFieldSelectBox type="checkbox"></BodyLeftInputFieldSelectBoxFieldSelectBox>
            <BodyLeftInputFieldSelectBoxFieldSpan>
              مرا به خاطر بسپار
            </BodyLeftInputFieldSelectBoxFieldSpan>
          </BodyLeftInputFieldSelectBoxField>
          <BodyLeftInputFieldButton onClick={userLogin}>
            ورود
          </BodyLeftInputFieldButton>
        </BodyLeftInputField> : <Loading/>
        }
       
      </BodyLeft>
    </Container>
  );
}
