import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './Navbar';
import About from './pages/About';
import Home from './pages/Home';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
    
      <Router>
        <Navbar />
        <Routes>
          <Route path ="/" element={ <Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/cocktail/:id" element={<SingleCocktail/>} />
          <Route path="*" element={ <Error/>} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
