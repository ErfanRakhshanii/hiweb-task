"use client";
import styled from "styled-components";
import constructWithOptions from "styled-components/dist/constructors/constructWithOptions";

export const Container = styled.main`
  max-width: 1440px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  direction: rtl;
  overflow-y: hidden;
`;
export const Header = styled.div`
  width: 100%;
  height: 105px;
  display: flex;
  border-bottom: 1px solid gray;
`;
export const HeaderContent = styled.div`
  width: 100%;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 36px;
`;
export const HeaderContentLeft = styled.div`
  width: 510px;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
`;
export const HeaderContentLeftbutton = styled.button`
  width: 266px;
  height: 100%;
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
`;
export const HeaderContentLeftspan = styled.span`
  width: fit-content;
  font-size: 18px;
  font-weight: 700;
  color: #5c5c5c;
`;
export const HeaderContentLeftdiv = styled.div`
  width: 60px;
  height: 25px;
  display: flex;
  gap: 4px;
  font-size: 16px;
  font-weight: 400;
  color: #ff6666;
`;
export const HeaderContentRight = styled.div`
  width: 120px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BodyNoneProduct = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
///////
export const ProductConatiner = styled.div`
  height: 300px;
  width: 324px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  background-color: white;
`;

export const ImageContainer = styled.div`
  height: 50%;
  width: 100%;
  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ProductDetails = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: white;
`;

export const ProductTitle = styled.div`
  width: 100%;
  text-align: right;
  padding: 8px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: black;
`;

export const ProductDescription = styled.div`
  width: 100%;
  text-align: right;
  padding: 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 200;
  color: black;
`;

export const ProductPrice = styled.div`
  width: 100%;
  text-align: right;
  padding: 4px;
`;
export const BodyProductBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
export const Product = styled.div`
  width: 324px;
  height: 376px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;
export const ModalContainer = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid #b6b6b6;
  outline: none;
  border-radius: 8px;
`;
export const ModalCloseButton0Box = styled.div`
  width: 90%;
  height: 5%;
  display: flex;
  align-items: end;
  justify-content: end;
  `;
export const ModalCloseButton0 = styled.button`
  width: 5%;
  height: 80%;
  border-radius: 10px;
border: none;
outline: none;

`;
export const ModalFormBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ModalTitle = styled.div`
  width: 100%;
  height: 5%;
`;
export const ModalInputBox = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const ModalInputBoxSpan = styled.span``;
export const ModalInputBoxInput = styled.input`
  width: 98%;
  height: 60%;
  padding-right: 10px;
  border-radius: 10px;
  outline: none;
  border: 1px solid gray;
`;
export const ModalTextareabox = styled.div`
  width: 90%;
  height: 45%;
`;
export const ModalTextareaboxSpan = styled.span``;
export const ModalTextareaboxTextarea = styled.textarea`
  width: 100%;
  height: 85%;
  padding-right: 10px;
  border-radius: 10px;
  border: 1px solid gray;
  resize: none;
`;
export const ModalUploadBox = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  flex-direction: column;
`;
export const ModalUploadBoxSpan = styled.span``;
export const ModalUploadBoxInput = styled.input`
  width: 100%;
  height: 70%;
`;
export const ModalButtonBox = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const ModalButtonLeft = styled.button`
  width: 30%;
  height: 90%;
  outline: none;
  border: 1px solid gray;
  border-radius: 10px;

  `;
export const ModalButtonright = styled.button`
  width: 30%;
  height: 90%;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: green;
`;
