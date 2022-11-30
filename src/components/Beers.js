import { Link } from 'react-router-dom'
import home from '../assets/home.png'


const Beers = () => {
    return ( 
        <nav>
            <Link to = '/' ><img src =  { home } alt = 'home' /> </Link>

        </nav>
     );
}
 
export default Beers;