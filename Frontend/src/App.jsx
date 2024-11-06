import { Route, Router, Routes } from "react-router-dom";
import './App.css'
import AuthLayout from "./components/auth/Layout";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";

function App() {

  return (
    
      <div className='flexflex-col overflow-hidden bg-white'>
      <h1>Header component</h1>

    <Routes>
      <Route path="/" element={<AuthLayout/>}>
        <Route path="login" element={<AuthLogin/>}/>
        <Route path="register" element={<AuthRegister/>}/>
      </Route>
    </Routes>
    </div>
    
  )
}

export default App
