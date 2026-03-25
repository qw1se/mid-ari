
export default function Cart({cart, removeFromCart}){

const total = cart.reduce((sum,item)=>sum + item.price,0)

return(

<div className="cart">

<h2>Your Cart</h2>

{cart.length === 0 && <p>Cart empty</p>}

{cart.map((item,i)=>(

<div className="cart-item" key={i}>

<span>
{item.title} - ${item.price}
</span>

<button onClick={()=>removeFromCart(i)}>
Remove
</button>

</div>

))}

<h3>Total: ${total.toFixed(2)}</h3>

</div>

)

}
