import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './Components/Navbar';
import ShoppingItems from './Pages/ShoppingITems';
import { Route, Routes } from 'react-router';
import Cart from './Pages/Cart';
import Favourites from './Pages/Favourites';


function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Routes>
        <Route path='/' element={<ShoppingItems />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/favourites' element={<Favourites />}></Route>
      </Routes>
    </div>
  );
}

export default App;
