import React from "react";
import { AppBar, Toolbar, Box, styled, Typography } from "@mui/material";
import logo from "../../assets/flipkart_logo.png";

import pluslogo from "../../assets/plus_logo.png";
//components
import Search from "./Search";
import CustomButtons from "./CustomButtons";

// Define the styled AppBar component
const StyledHeader = styled(AppBar)({
  background: "#2874f0",
  height: "60px",
});

const LogoComponent = styled(Box)({
  marginLeft: "12%",
  lineHeight: "0",
  marginRight: "15px",
});

const LogoSubHeading = styled(Typography)({
  fontSize: "13px",
  fontStyle: "italic",
  fontWeight: "500",
});

const PlusImage = styled("img")({
  width: "12px",
  height: "12px",
  marginLeft: "4px",
  marginTop: "3px",
});

const CustomButtonsWrapper = styled(Box)({
  margin: "0 5% 0 auto",
});

const Header = () => {
  return (
    <StyledHeader position="static">
      <Toolbar style={{ minHeight: "60px" }}>
        <LogoComponent>
          <img src={logo} alt="Logo" style={{ width: 85 }} />
          <Box style={{ display: "flex" }}>
            <LogoSubHeading>
              Explore{" "}
              <Box
                component="span"
                style={{ color: "yellow", marginLeft: "2" }}
              >
                Plus
              </Box>
            </LogoSubHeading>
            <PlusImage src={pluslogo} alt="plusLogo" />
          </Box>
        </LogoComponent>
        <Search />
        <CustomButtonsWrapper>
          <CustomButtons />
        </CustomButtonsWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
