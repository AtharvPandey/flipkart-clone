import React from "react";
import { useState, useContext } from "react";
import { Button, Box, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-items: Center;
  }
`;

const CartContainer = styled(Box)({
  display: "flex",
});

const LoginButton = styled(Button)({
  color: "#2874f0",
  background: "#fff",
  textTransform: "none",
  padding: "5px 40px",
  borderRadius: "2px",
  boxShadow: "none",
  fontWeight: "600",
  height: "32px",
});
const CustomButtons = () => {
  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: "3px", width: "135px" }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: "3px" }}>More </Typography>
      <CartContainer>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </CartContainer>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
