import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
