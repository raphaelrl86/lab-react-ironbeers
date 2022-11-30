import { Link } from 'react-router-dom'
import home from '../assets/home.png'

const NewBeer = () => {
    return ( 
        <nav>
            <Link to = '/' ><img src =  { home } alt = 'home' /> </Link>
        </nav>
     );
}
 
export default NewBeer;