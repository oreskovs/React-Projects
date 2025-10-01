import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  const [recipeShown, setRecipeShown] = useState(false);

  function showRecipe() {
    setRecipeShown(!recipeShown);
  }

  function addItem(formData) {
    const newIngredient = formData.get("ingredient");

    if (newIngredient === "") {
      return;
    }

    setIngredients((prevA) => [...prevA, newIngredient]);
  }

  return (
    <main>
      <form action={addItem} className="form-sec">
        <input
          name="ingredient"
          aria-label="Add ingredient"
          type="text"
          className="input"
          placeholder="e.g. oregano"
        />
        <button className="input-btn">+ Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList showRecipe={showRecipe} ingredients={ingredients} />
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
