import { Navbar } from "../components/navbar";
import { useEffect, useMemo, useState } from "react";

export const Home=()=>{
  const [recipes,setRecipes]=useState([]);
  const memoizedRecipes = useMemo(() => recipes, [recipes]);
  const saveRecipe = async (id) => {
    
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        console.log("useEffect");
        const res = await fetch("http://localhost:3001/recipes");
        const data = await res.json();
        setRecipes(data);
      } catch (err) {
        console.log(err);
        alert("error");
      }
    };

    fetchRecipes();
  }, []);

  return(
    <div>
      <h1>Recipes</h1>
      <Navbar />
      <ul style={{ listStyle: "none"}}>
        {memoizedRecipes.map((recipe) => {
          return(
            <li key={recipe._id}>
              <h2>{recipe.name}</h2>
              <button onClick={()=>saveRecipe(recipe._id)}>Save</button>
              <h2>{recipe.ingredients}</h2>
              <h2>{recipe.imgURL}</h2>
              <h2>{recipe.cookingTime}</h2>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
