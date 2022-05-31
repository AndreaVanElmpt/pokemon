import React from 'react';
import logo from './assets/logo2.png';
import PokeList from "./components/PokeList/PokeList";
import './App.css';



function App() {

  return (
 <>
     <div >
         <img className='logo' src={logo} alt='Pokemon-logo' />
     </div>
        <PokeList />



 </>
  );
}


export default App;
