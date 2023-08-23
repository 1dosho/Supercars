import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import './Card.css'

/* eslint-disable react/prop-types */
const Card=({id, img, title, topSpees, price})=>{
   const dispatch = useDispatch()
   
   const addHandler=()=>{
     dispatch(addToCart({
     id, title, img, topSpees, price
    }))
   }
   
   return <div className="body">
        
        <img src={img} className="img"/>
        <h2>{title}</h2>
        <h3>{topSpees}</h3>
        <p>{price}</p>
        <button onClick={addHandler}>ADD TO WISHLIST</button>
    </div>
}

export default Card