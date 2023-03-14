import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import './Index.css'
import Admin from "./Pages/admin/Admin";
import AdminUserList from "./Pages/admin/AdminUsersList";
import AdminProductList from "./Pages/admin/AdminProductList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./Pages/Catalogo";



function App() {
 
  return (

    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/register" element={<Register/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/plantilla" element={<Catalogo/>}/>
       <Route path="/cart" element={<Cart/>}/>
       
       <Route path="/admin" element={<Admin/>}/>
       <Route path="/admin-ulist" element={<AdminUserList/>}></Route>
       <Route path="/admin-plist" element={<AdminProductList/>}></Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App;
