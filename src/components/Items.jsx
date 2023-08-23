import { useSelector } from 'react-redux';

const Items=()=>{
   const cart = useSelector((state) => state.cart)

const getTotalQuantity = () => {
  let total = 0
  cart.forEach(item => {
    total += item.quantity
  })
  return total
}
  <p>{getTotalQuantity() || 0}</p>

}

export default Items