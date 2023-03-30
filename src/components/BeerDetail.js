import Header from './Header';
import axios, { Axios } from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const


const BeerDetail = () => {
    const { beerId } = useParams()
    const [beer, setBeer] = useState(null)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/${beerId}`)
            .then(response.data)

    }, [beerId])

    if(!beer) {
        return
    }

    return ( 
        <nav>
            <Header />
        </nav>
     );
}
 
export default BeerDetail;