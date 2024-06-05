import "./App.css";

//components
import Header from "./component/header/Header";
import Home from "./component/Home/Home";
import DataProvider from "./context/DataProvider";
import { Box } from "@mui/material";

function App() {
  return (
    <DataProvider>
      <Header />
      <Box>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
