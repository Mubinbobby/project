import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/Layout'
import AuthLogin from './pages/auth/Login';
import AuthRegister from './pages/auth/Register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/auth' element={<AuthLayout/>}>
        <Route path='login' element={<AuthLogin/>}/>
        <Route path='register' element={<AuthRegister/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
export default App
