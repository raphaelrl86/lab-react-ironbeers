import { Link } from 'react-router-dom'
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import { Routes, Route } from 'react-router-dom'
// import Beers from './Beers'


const HomePage = () => {
    return ( 
        <div>
            <img src =  { beers } alt = 'beers' />
            <Link to = '/beers'>
                <h1>All beers</h1>
                <p> lorem ipsum </p>
            </Link>
            <img src =  { newBeer } alt = 'newBeer' />
            <Link to = '/random-beer'>Random Beer</Link>
            <img src =  { randomBeer } alt = 'randomBeer' />
            <Link to = '/new-beer'>New Beer</Link>
        </div>
       
     );
}
 
export default HomePage;