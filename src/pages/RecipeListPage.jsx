import { useState } from "react";
import { Center, Heading, Input } from "@chakra-ui/react";
import { RecipeBox } from "../components/RecipeBox";
import { data } from "../utils/data";

export const RecipeListPage = ({ clickFn }) => {
  // recipes in new array
  let recipes = [];

  data.hits.map((recipe) => {
    recipes.push(recipe);
  });

  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  // filter recipes that include searchfield
  const matchedRecipes = recipes.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  return (
    <>
      <Center h="30vh" flexDir="column">
        <Heading mb={"7vh"}>RecipeList</Heading>
        <Input
          onChange={handleChange}
          border={"2px"}
          borderColor={"black"}
          placeholder="search"
          w={"300px"}
        ></Input>
      </Center>
      <RecipeBox clickFn={clickFn} recipes={matchedRecipes} />
    </>
  );
};
