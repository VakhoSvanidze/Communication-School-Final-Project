import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import { AuthContextProvider} from "./context/AppContext";
import App from "./App";


const root = createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App /> 
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)