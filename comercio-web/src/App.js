import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import ItemList from './components/ItemList';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemList/>
    </div>
  );
}

export default App;
