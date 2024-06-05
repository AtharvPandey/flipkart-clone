import React from "react";
import { Typography, Box, styled } from "@mui/material";
import { navData } from "../../constant/data";

const Component = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  margin: "0px 110px 0px 110px",
});
const Conatiner = styled(Box)({
  padding: "12px 8px",
  textAlign: "center",
});

const Text = styled(Typography)({
  fontSize: "16px",
  fontWeight: "600",
  fontFamily: "inherit",
});

const NarBar = () => {
  return (
    <Component>
      {navData.map((data) => (
        <Conatiner>
          <img src={data.url} alt="nav" style={{ width: "80px" }} />
          <Text>{data.text}</Text>
        </Conatiner>
      ))}
    </Component>
  );
};

export default NarBar;
