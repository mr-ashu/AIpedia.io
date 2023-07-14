import { Navbar } from "./Components/Navbar";
import "./App.css"
import { Router } from "./Router";
import { Box} from "@chakra-ui/react";
import { Footer } from "./Components/Home/Footer";
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
      <Box>
        <Router />
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
