import React from 'react';
import {Link} from 'react-router-dom'
function Cocktail({id,image,glass,name,info}) {
  return <article className="cocktail">
    <div>
        <img src={image} alt={name} />    
    </div>
    <div className='cocktail-footer'>
    <h3>{name}</h3>
    <h3>{glass}</h3>
    <p>{info}</p>
    <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
      details
    </Link>
    </div>
  </article>;
}

export default Cocktail;
