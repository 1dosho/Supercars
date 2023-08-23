import data from '../assets/Cars.json'
import Card from '../components/Card'
import './Gallery.css'
import '../components/Card.css'


const Gallery=()=>{
    return <div className='gallery-page'>
        {data.map((cars)=><Card id={cars._id} key={cars._id} img={cars.image} title={cars.title} topSpees={cars.topSpeed} price={cars.price}/>)}
    </div>
}

export default Gallery