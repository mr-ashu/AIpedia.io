import { Navbar } from "./Components/Navbar";
 
import { Router } from "./Router";
import MiniDrawer from "./Components/LeftBar";
import { Box, useColorModeValue } from "@chakra-ui/react";
 
 
 


function App() {
 
  return (
    <>
       <Navbar/>
       <Box bg={useColorModeValue("white","#464444")}>
       <Router/>
       </Box>
    
   
       
         
    </>
  );
}

export default App;
