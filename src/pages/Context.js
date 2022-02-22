import React,{useState,useEffect,useContext,createContext} from 'react';
import { useCallback } from 'react';

const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const InitialValue = {idDrink:"11007", 
"strDrink":"Margarita",
 "strDrinkThumb":"https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
  "strAlcoholic":"Alcoholic",
   "strGlass":"Cocktail glass"};

export const AppContext = createContext(InitialValue);


export const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("s");
    const [cocktails, setCocktails] = useState([]);
    const fetchDrinks = useCallback(async ()=>{
        setLoading(true);
        try {
            console.log("What the fuck" , `${url}${searchTerm}`);
            const response = await fetch(`${url}${searchTerm}` , {
                method : 'GET'
            });
            const data = await response.json();
            console.log(data)
            const {drinks} = data;
            if(drinks){
                const newCocktails = drinks.map((item)=>{
                    const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
                    return {
                        id:idDrink,
                        name:strDrink,
                        image:strDrinkThumb,
                        glass: strGlass,
                        info:strAlcoholic
                    }
                })
                setCocktails(newCocktails);
            }
            else{
                setCocktails([]);
            }
            setLoading(false);
        }
        catch(err){
            console.log(err);
            setLoading(false);
        }
    },[searchTerm]);
    useEffect(()=>{
        fetchDrinks();
    },[searchTerm, fetchDrinks]);

    return (
        <AppContext.Provider value={{loading, cocktails, searchTerm, setSearchTerm}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
