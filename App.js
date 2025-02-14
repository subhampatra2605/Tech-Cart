import { BrowserRouter, Routes, Route,Link } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import About from "./About" 
import Contact from "./Contact"
import MyCart from "./MyCart"
import Login from "./login"
import { useState } from "react"
import AddProduct from "./addProduct"
export default function App(){
  const [cartItems,setCartItems] = useState([]);
  const cartItemFun = (item)=>{
  let list = [...cartItems, item];
  setCartItems(list);
}
  const deleteItem = (index)=>{
  let list = [...cartItems];
  list.splice(index,1); 
  setCartItems (list);
  }
 return(
  <>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="" element={<Home purchaseFun={cartItemFun }/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/mycart" element={<MyCart purchaseItem={cartItems} delProduct={deleteItem}/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/addproduct" element={<AddProduct/>}/>
    </Routes>
  
  </BrowserRouter>
  </>
 ) 
}