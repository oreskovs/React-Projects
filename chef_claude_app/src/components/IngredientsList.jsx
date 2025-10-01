import React from "react";

export default function IngredientsList(props) {
  const item = props.ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  return (
    <section className="suggested-recipe-container">
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {item}
      </ul>
      {props.ingredients.length >= 4 ? (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.showRecipe}>Get a recipe</button>
        </div>
      ) : (
        <small>Add at least 4 ingredients to generate a recipe.</small>
      )}
    </section>
  );
}
