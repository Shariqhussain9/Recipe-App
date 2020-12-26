import './App.css';
import React, { useEffect, useState } from 'react';
import Recipe from './comp/recipe';

const App = () => {

  const APP_ID = 'dc34792b';
  const APP_KEY = '3eab1a651f78f58e8b394f905f3efa21';
  const [Recipes, SetRecipes] = useState([]);
  const [query, Setquery] = useState("momo");
  const [search, Setsearch] = useState("");



  useEffect(() => {
    getrecipe();
  }, [query]);

  const getrecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    // console.log(data);
    SetRecipes(data.hits);

  }
  const handleSearch = e => {
    e.preventDefault();
    // console.log(search)
    Setquery(search);
    Setsearch('');
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={handleSearch}>
        <input className="search-bar" type="text" value={search} onChange={e => Setsearch(e.target.value)} />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="recipes">
        {Recipes.map(recipe => <Recipe key={recipe.recipe.label} Recipe={recipe.recipe} />)
        }
      </div>

    </div>
  );
}

export default App;
