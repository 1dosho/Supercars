import { Link } from 'react-router-dom'

import './Header.css'
const Header=()=>{
    return <div className='header'>
        <div className='logo'><h2><Link to='/'>LOGO</Link></h2></div>
        <div className='nav'>  
             <h2><Link to='/gallery'>GALLERY</Link></h2>
        </div>
        <div className='cart'><h2><Link to='/cart'>MY WISHLIST</Link></h2></div>
    </div>
}

export default Header