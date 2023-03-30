import home from '../assets/home.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return ( 
        <nav className ="Header">
            <Link to = '/' ><img src =  { home } alt = 'home' /> </Link>
        </nav>
     )
}
 
export default Header;