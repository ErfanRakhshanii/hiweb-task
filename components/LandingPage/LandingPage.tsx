"use client";

import { RootState } from "@/Redux/Store";
import {
  BodyProductBox,
  Container,
  Header,
  HeaderContent,
  HeaderContentLeft,
  HeaderContentLeftbutton,
  HeaderContentLeftdiv,
  HeaderContentLeftspan,
  HeaderContentRight,
  ImageContainer,
  ModalButtonBox,
  ModalButtonLeft,
  ModalButtonright,
  ModalCloseButton0,
  ModalCloseButton0Box,
  ModalContainer,
  ModalFormBox,
  ModalInputBox,
  ModalInputBoxInput,
  ModalInputBoxSpan,
  ModalTextareabox,
  ModalTextareaboxSpan,
  ModalTextareaboxTextarea,
  ModalTitle,
  ModalUploadBox,
  ModalUploadBoxInput,
  ModalUploadBoxSpan,
  Product,
  ProductConatiner,
  ProductDescription,
  ProductDetails,
  ProductPrice,
  ProductTitle,
} from "@/StyledComponents/LandingPageStyles/LandingPageStyles";
import { Modal } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
interface itemtype{
  id : number;
  imageUrl : undefined|File;
  title : string;
  description : string;
  price : number;
}
export default function LandingPage({ l }: { l:  React.Dispatch<React.SetStateAction<boolean>> }) {
  const username = useSelector((state: RootState) => state.Reducers.username);
  const [activemodal, setActivemodal] = useState(false);
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<number>();
  const [productTexts, setProductTexts] = useState<string>("");
  const [productImage, setProductImage] = useState<File | undefined>();
  const [products, setProducts] = useState<any>([]);
  const [productsIsloading, setProductsIsloading] = useState(false);
  const [productsError, setProductsError] = useState<any>(null);
  const [productsPage, setProductsPage] = useState(1);
  const accessToken = localStorage.getItem("accesstoken");
  function HandleLogout() {
    localStorage.removeItem("accesstoken");
    l(false);
  }
  const HandleAddProduct = async () => {
    if (
      productName !== "" &&
      productPrice !== 0 &&
      productTexts !== "" &&
      productImage !== undefined
    ) {
      try {
        const formData = new FormData();
        if(productPrice){
        formData.append("ProductTitle", productName);
        formData.append("ProductPrice", `${productPrice}`);
        formData.append("Description", productTexts);
        formData.append("file", productImage);
      }

        const response = await fetch(
          "https://taskapi.hiweb.ir/api/General/Product/AddProduct",
          {
            method: "POST",
            body: formData,
            headers: {
              accept: "text/plain",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        alert("محصول شما با موفقیت ثبت شد");
      } catch (error) {
        console.error("Error:", error);
        alert("مشکلی پیش آمده لطفا دوباره تلاش کنید");
      }
    } else {
      alert("لطفا مشخصات محصول را کامل و درست وارد نمایید");
    }
  };

  const HandleGetProducts = async () => {
    try {
      setProductsIsloading(true);
      setProductsError(null);
      const response = await fetch(
        `https://taskapi.hiweb.ir/api/General/Product/ProductList?count=19&skip=${productsPage}`,

        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      if (data.data.list.length > 0) {
        setProducts((prevItems:[]) => [...prevItems, ...data.data.list]);
        setProductsPage((prevPage) => prevPage + 8);
      }
    } catch (error) {
      setProductsError(error);
    } finally {
      setProductsIsloading(false);
    }
  };

  useEffect(() => {
    HandleGetProducts();
  }, []);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      productsIsloading
    ) {
      return;
    }
    HandleGetProducts();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [productsIsloading]);

  const handleProductImageInput = (e: ChangeEvent<HTMLInputElement>) => {
    const productImage = e.target.files?.[0];
    setProductImage(productImage);
  };
  const handleCloseModal = () => {
    setActivemodal(false);
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          <HeaderContentRight>لیست محصولات</HeaderContentRight>
          <HeaderContentLeft>
            <HeaderContentLeftbutton onClick={() => setActivemodal(true)}>
              افزودن محصول
            </HeaderContentLeftbutton>
            <HeaderContentLeftspan>{username}</HeaderContentLeftspan>
            <HeaderContentLeftdiv onClick={HandleLogout}>خروج</HeaderContentLeftdiv>
          </HeaderContentLeft>
        </HeaderContent>
      </Header>
      <BodyProductBox>
        <InfiniteScroll
          style={{
            overflow: "auto",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
          }}
          dataLength={8}
          next={HandleGetProducts}
          hasMore={true}
          loader={<p>Loading...</p>}
          endMessage={<p>No more data to load.</p>}
        >
          {products.map((item:itemtype, index:number) => (
            <ProductConatiner key={item.id}>
              <ImageContainer
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              />
              <ProductDetails>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductDescription>{item.description}</ProductDescription>
                <ProductPrice>{item.price} قیمت</ProductPrice>
              </ProductDetails>
            </ProductConatiner>
          ))}
        </InfiniteScroll>
        {productsIsloading && <p>Loading...</p>}
        {productsError && <p>Error</p>}
      </BodyProductBox>
      <Modal
        open={activemodal}
        onClose={handleCloseModal}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>
          <ModalCloseButton0Box>
            <ModalCloseButton0 onClick={handleCloseModal}>x</ModalCloseButton0>
          </ModalCloseButton0Box>
          <ModalFormBox>
            <ModalTitle>افزودن محصول</ModalTitle>
            <ModalInputBox>
              <ModalInputBoxSpan>نام محصول</ModalInputBoxSpan>
              <ModalInputBoxInput
                placeholder="نام محصول..."
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setProductName(e.target.value);
                }}
              ></ModalInputBoxInput>
            </ModalInputBox>
            <ModalInputBox>
              <ModalInputBoxSpan>قیمت محصول</ModalInputBoxSpan>
              <ModalInputBoxInput
                placeholder="قیمت محصول..."
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setProductPrice(+(e.target.value));
                }}
              ></ModalInputBoxInput>
            </ModalInputBox>
            <ModalTextareabox>
              <ModalTextareaboxSpan>توضیحات</ModalTextareaboxSpan>
              <ModalTextareaboxTextarea
                placeholder="..."
                onChange={(e) => setProductTexts(e.target.value)}
              ></ModalTextareaboxTextarea>
            </ModalTextareabox>
            <ModalUploadBox>
              <ModalUploadBoxSpan>اپلود عکس</ModalUploadBoxSpan>
              <ModalUploadBoxInput
                placeholder="jpeg.png"
                type="file"
                onChange={handleProductImageInput}
              ></ModalUploadBoxInput>
            </ModalUploadBox>
            <ModalButtonBox>
              <ModalButtonLeft onClick={handleCloseModal}>بستن</ModalButtonLeft>
              <ModalButtonright onClick={HandleAddProduct}>
                ثبت
              </ModalButtonright>
            </ModalButtonBox>
          </ModalFormBox>
        </ModalContainer>
      </Modal>
    </Container>
  );
}
