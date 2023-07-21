import { Navbar } from "./Components/Navbar";
import "./App.css"
import { Router } from "./Router";
import { Box} from "@chakra-ui/react";
 
import { useSelector } from "react-redux";
import Dashboard from "./Admin/Pages/Dashboard";


function App() {
 
  const { userReducer } = useSelector((store) => store)

  

  if (userReducer.isAuth.isAdmin) {
    return <Dashboard />
  }
  return (
    <Box fontFamily="Segoe UI" className="app">
      <Navbar />
      
        <Router />
      
    
    </Box>
  );
}

export default App;
