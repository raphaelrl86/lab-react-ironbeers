import axios from 'axios'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers'



const Beers = () => {
    const [beers, setBeers] = useEffect([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL)
            .then(response => {
                setBeers(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    if(!beers.length) {
        return <p>Loading...</p>
    }

    return ( 
        <div className='Beers'>
            <Header />
            {
                beers.map(beer => {
                    return (
                        <div key={berr._id}>
                            <div className=''
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default Beers;