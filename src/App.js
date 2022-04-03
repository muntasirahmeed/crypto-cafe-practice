
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import CoinDetails from './components/CoinDetails/CoinDetails';
import Coins from './components/Coins/Coins';
import BdAddress from './components/Contact/BdAdress';
import Contact from './components/Contact/Contact';
import UsAddress from './components/Contact/UsAdress';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/contact' element={<Contact></Contact>}>
          <Route path='bdadress' element={<BdAddress></BdAddress>}></Route>
          <Route path='usadress' element={<UsAddress></UsAddress>}></Route>
        </Route>
        <Route path='/coindetails/:id' element={<CoinDetails></CoinDetails>}></Route>
        <Route path='/about' element={<About></About>}> </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
