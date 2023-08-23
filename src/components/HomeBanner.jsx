import { useNavigate } from 'react-router-dom'

import banner from '../images/HomeBanner.png'
import './HomeBanner.css'

const HomeBanner=()=>{
    const navigate = useNavigate()
    
    return <div>
        <img src={banner} alt='banner' className='banner'/>
        <div className='gallery'>
            <h1>Our Gallery</h1>
            <div className='link' onClick={()=>navigate('/gallery')} >To Our Cars Gallery</div>
    </div>
    </div>
    
}
export default HomeBanner