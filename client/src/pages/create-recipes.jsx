import { useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID.js";
import {useNavigate} from "react-router-dom";
export const CreateRecipes=()=>{
    const navigate = useNavigate();
    const userID = useGetUserID();
    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: [],
        imgURL: "",
        cookingTime: 0,
        userOwner: userID,
    });
    const onsubmit=async (e)=>{
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:3001/recipes", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(recipe)
            });
            const parseRes = await response.json();
            console.log(parseRes);
            navigate("/");
        }
        catch(err){
            console.log(err);
        }
    }
    const handleChange=(e)=>{
        const {name, value} = e.target;
        setRecipe({...recipe, [name]: value});
    }
    const addIngredientBox=(e)=>{
        e.preventDefault();
        setRecipe({...recipe, ingredients: [...recipe.ingredients, ""]});
    }
    const handleIngredientChange=(e,index)=>{
        const {value} = e.target;
        const ingredients= [...recipe.ingredients];
        ingredients[index]=value;
        setRecipe({...recipe, ingredients});
    }
    return(
        <div>
            {console.log(recipe)}
            <form onSubmit={onsubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={handleChange}/>
                <label htmlFor="ingredients">Ingredients</label>
                {recipe.ingredients.map((ingredient, index)=>
                 <input type="text" name="ingredients" id="ingredients" key={index} value={ingredient} onChange={e=>(handleIngredientChange(e,index))}/>
)}
                <button onClick={addIngredientBox}>Add Ingredient</button>
                <label htmlFor="imgURL">ImgURL</label>
                <input type="text" name="imgURL" id="imgURL"  onChange={handleChange}/>
                <label htmlFor="cookingTime">Cooking Time</label>
                <input type="number" name="cookingTime" id="cookingTime"  onChange={handleChange}/>
                <button type="submit">Submit</button>

                

            </form>
        </div>
    )
};