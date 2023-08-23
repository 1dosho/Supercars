import { useSelector } from 'react-redux'

import Card from '../components/Card'
import './Cart.css'

const Cart=()=>{
    const cart = useSelector((state) => state.cart)
console.log(cart);
  return (
  <div className="cart_left">
    {cart?.map((item) => (
      <Card
        key={item._id}
        id={item._id}
        img={item.img}
        title={item.title}
        price={item.price} 
        topSpees={item.topSpees}
      />
    ))}
    
  </div>
  )
}

export default Cart