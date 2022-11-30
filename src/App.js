import './App.css';
import HomePage from './components/HomePage';
import {Routes, Route} from 'react-router-dom'
import Beers from './components/Beers';
import NewBeers from './components/NewBeers';
import BeerDetail from './components/BeerDetail';



function App() {
  return (
    <div className="App">
      <Routes>
            <Route path = '/' element = {<HomePage/>}/>
            <Route path = '/beers' element = {<Beers/>}/>
            <Route path = '/new-beer' element = {<NewBeers/>}/>
            <Route path = '/random-beer' element = {<BeerDetail/>}/>
        </Routes>
    </div>
  );
}

export default App;
