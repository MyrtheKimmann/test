import "./index.css";
import { useState } from "react";
import { RecipePage } from "./components/RecipePage";
import { RecipeListPage } from "./pages/RecipeListPage";

export const App = () => {
  const [selectedRecipeItem, setSelectedRecipe] = useState();

  return (
    <div className="App">
      {selectedRecipeItem ? (
        <RecipePage recipe={selectedRecipeItem} clickFn={setSelectedRecipe} />
      ) : (
        <>
          <RecipeListPage clickFn={setSelectedRecipe} />
        </>
      )}
    </div>
  );
};
