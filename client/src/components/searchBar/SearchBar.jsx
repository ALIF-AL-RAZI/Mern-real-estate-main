import React, { useState } from 'react'
import "./SearchBar.scss"

const types = ["Buy", "Rent"];

const SearchBar = () => {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0,
    })

    const swithType = (val)=>{
        setQuery((prev)=>({...prev, type: val}));
    };
  return (
    
    <div className="searchBar">
        <div className="type">
            {types.map((type)=>(
                <button key={type}
                onClick={()=> swithType(type)}
                className={query.type=== type? "active" : ""}>
                    {type}
                    </button>
            ))}
        </div>
        
        <form action="">
            <input type="text" name='location' placeholder='City Location' />
            <input type="number" name='minPrice' min={0} max={10000000} placeholder='Max Price' />
            <input type="number" name='maxPrice' min={0} max={10000000} placeholder='Min Price' />
            <a href=""><button>
                <img src="/search.png" alt="" />
            </button></a>
        </form>
    </div>
  )
}

export default SearchBar