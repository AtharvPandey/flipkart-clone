import React from "react";
import { Box, styled } from "@mui/material";
import { useEffect } from "react";
//components
import NavBar from "../Home/NarBar";
import Banner from "./Banner";
import { getProducts } from "../../redux/actions/ProductActions";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)({
  padding: "12px",
  background: "#F4F4F4",
});
function Home() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.getProducts);
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
      </Component>
    </>
  );
}

export default Home;
