import React from "react";

import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)({
  background: "#fff",
  width: "38%",
  borderRadius: "3px",
  marginLeft: "10px",
  display: "flex",
});

const InputSearchBase = styled(InputBase)({
  width: "100%",
  paddingLeft: "20px",
  fontSize: "unset",
});

const SearchIconWrapper = styled(Box)({
  color: "blue",
  padding: "5px",
  display: "flex",
});

const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for product, brand and more" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default Search;
