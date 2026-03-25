
import { Routes, Route, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Home from "./pages/Home.jsx"
import Cart from "./pages/Cart.jsx"

export default function App(){

const [cart,setCart] = useState(() => {
const saved = localStorage.getItem("cart")
return saved ? JSON.parse(saved) : []
})

useEffect(()=>{
localStorage.setItem("cart", JSON.stringify(cart))
},[cart])

function addToCart(product){
setCart([...cart,product])
}

function removeFromCart(index){
const newCart = cart.filter((_,i)=> i !== index)
setCart(newCart)
}

return(

<div>

<nav className="nav">

<h1>🛒 QW SHOP</h1>

<div>
<Link to="/">Products</Link>
<Link to="/cart">Cart ({cart.length})</Link>
</div>

</nav>

<Routes>

<Route path="/" element={<Home addToCart={addToCart}/>}/>

<Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>}/>

</Routes>

</div>

)

}
