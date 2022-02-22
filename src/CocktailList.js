import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from './pages/Context';

function CocktailList() {
    const {loading, cocktails} = useGlobalContext();
    if(loading){
        return (
            <Loading />
        )
    }
    if(cocktails.length<1){
        return <h1>No Such Cocktails...</h1>
    }
  return <section className='section'> 
    <h2 className='section-title'>
        Cocktails
    </h2>
    <div className="cocktails-center">
      {cocktails.map((item)=> <Cocktail key={item.id} {...item} /> )}
    </div>
  </section>;
}

export default CocktailList;
