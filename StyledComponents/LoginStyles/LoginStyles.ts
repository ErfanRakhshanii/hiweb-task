"use client"
import styled from "styled-components"

export const Container = styled.main`
max-width: 1440px;
width: 100%;
height: 100vh;
display: flex;
overflow-y: hidden;

`
export const BodyRight = styled.div`
width: 60%;
height: 100%;
`
export const BodyLeft = styled.div`
width: 40%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 50px;
margin-top: 20px;
`
export const BodyLeftLogo = styled.div`
width: 136px;
height: 91px;

`
export const BodyLeftInputField = styled.div`
width: 386px;
height: 321px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

border-radius: 16px;
border: 1px solid #9A9A9A;
padding: 58px 48px;
`
export const BodyLeftInputFieldInputBox = styled.div`
width: 100%;
height: 109px;
display: flex;
flex-direction: column;
gap: 8px;
`
export const BodyLeftInputFieldInputBoxSpan = styled.span`
font-size: 16px;
font-weight: 400;
color: #A0A0A0;
`
export const BodyLeftInputFieldInputBoxInput = styled.input`
width: 376px;
height: 48px;
border: 1px solid #A0A0A0;
outline: none;
padding-right: 10px;
border-radius: 10px;
`
export const BodyLeftInputFieldSelectBoxField = styled.div`
width: 100%;
height: 28px;
display: flex;
align-items: center;
gap: 8px;
`
export const BodyLeftInputFieldSelectBoxFieldSelectBox = styled.input`
width: 28px;
height: 28px;
outline: none;
border: 1px solid #A0A0A0;
color: #A0A0A0;
`
export const BodyLeftInputFieldSelectBoxFieldSpan = styled.span`
font-size: 16px;
font-weight: 700;
color: blue;
`
export const BodyLeftInputFieldButton = styled.button`
  width: 386px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #46b666;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 400;
  color: white;
  margin-top: 38px;
`;


