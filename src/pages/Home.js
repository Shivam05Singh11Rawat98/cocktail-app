import React from 'react';
import CocktailList from '../CocktailList';
import SearchForm from '../SearchForm';
import { AppProvider } from './Context';

function Home() {
  return (
    <div>
      <AppProvider>
        <SearchForm />
        <CocktailList />     
      </AppProvider> 
    </div>
  )
}

export default Home;
