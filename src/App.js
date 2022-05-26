import { useContext } from "react";
import { AuthContext } from "./context/AppContext";
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navigation/Navbar";
import Routes from "./Routes";


function App() {
  const state = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Routes />
    </>
  )
}

export default App;
