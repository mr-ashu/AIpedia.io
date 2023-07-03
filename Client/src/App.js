import { Navbar } from "./Components/Navbar";
import "./App.css"
import { Router } from "./Router";
 
import { Box, useColorModeValue } from "@chakra-ui/react";
 
import { Footer } from "./Components/Home/Footer";
import Register from "./Components/dummy";
 
 
 
 
 


function App() {
 
  return (
    <Box  fontFamily="Segoe UI" >


        <Navbar/>
      
       <Box bg={useColorModeValue("white","#383838")} minH="100vh" >
       <Router/>

       <Footer/>
       </Box> 



       {/* <Register/> */}

  
      
    
       
         
    </Box>
  );
}

export default App;
