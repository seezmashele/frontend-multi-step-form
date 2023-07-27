import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { FormDataProvider } from "./context/FormDataContext.jsx"
import App from "./App.jsx"
import "./styles/app.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FormDataProvider>
        <App />
      </FormDataProvider>
    </BrowserRouter>
  </React.StrictMode>
)
