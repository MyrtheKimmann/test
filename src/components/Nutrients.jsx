import { Text, Box } from "@chakra-ui/react";

export const Nutrients = ({ recipe }) => {
  return (
    <>
      <Text fontWeight={"bold"}>Total nutrients: </Text>
      <Box fontSize={"14px"} display={"flex"}>
        <Text>{recipe.recipe.calories.toFixed()} calories</Text>
        <Text ml={"10px"}>
          {recipe.recipe.totalNutrients.CHOCDF.quantity.toFixed()}{" "}
          {recipe.recipe.totalNutrients.CHOCDF.unit} carbs
        </Text>
        <Text ml={"10px"}>
          {recipe.recipe.totalNutrients.PROCNT.quantity.toFixed()}{" "}
          {recipe.recipe.totalNutrients.PROCNT.unit} protein
        </Text>
        <Text ml={"10px"}>
          {recipe.recipe.totalNutrients.FAT.quantity.toFixed()}{" "}
          {recipe.recipe.totalNutrients.FAT.unit} fat
        </Text>
        <Text ml={"10px"}>
          {recipe.recipe.totalNutrients.CHOLE.quantity.toFixed()}{" "}
          {recipe.recipe.totalNutrients.CHOLE.unit} cholesterol
        </Text>
        <Text ml={"10px"}>
          {recipe.recipe.totalNutrients.NA.quantity.toFixed()}{" "}
          {recipe.recipe.totalNutrients.NA.unit} sodium
        </Text>
      </Box>
    </>
  );
};
