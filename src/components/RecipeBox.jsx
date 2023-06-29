import { Box, Text, Image, Badge } from "@chakra-ui/react";
import uuid from "react-uuid";

export const RecipeBox = ({ clickFn, recipes }) => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={"30px"}
        pb={"100px"}
      >
        {recipes.map((recipe) => (
          <Box
            onClick={() => clickFn(recipe)}
            w={"280px"}
            h={"380px"}
            bgColor={"white"}
            borderRadius={"10%"}
            overflow={"hidden"}
            cursor={"pointer"}
            textAlign={"center"}
            fontSize={"14px"}
            key={uuid()}
          >
            <Image
              src={recipe.recipe.image}
              w={"280px"}
              h={"190px"}
              objectFit={"cover"}
              mb={"10px"}
            />
            <Text textTransform={"uppercase"} fontWeight={"lighter"}>
              {recipe.recipe.mealType.join("")}
            </Text>
            <Text fontWeight={"700"} fontSize={"15px"}>
              {recipe.recipe.label}
            </Text>
            {/* als healthlabels includes vegan, render badge with text vegan */}
            {recipe.recipe.healthLabels.includes("Vegan") && (
              <Badge key={uuid()} colorScheme={"purple"}>
                Vegan
              </Badge>
            )}
            {/* als healthlabels includes vegetarian, render badge with text vegetarian */}
            {recipe.recipe.healthLabels.includes("Vegetarian") && (
              <>
                <Badge colorScheme={"purple"} ml={"5px"} key={uuid()}>
                  Vegetarian
                </Badge>
                <br></br>
              </>
            )}
            {/* als er dietlabels zijn, render dietlabels */}
            {recipe.recipe.dietLabels.length > 0 &&
              recipe.recipe.dietLabels.map((dietLabel) => {
                return (
                  <Badge colorScheme={"green"} ml={"5px"} key={uuid()}>
                    {dietLabel}
                  </Badge>
                );
              })}
            <Text>Dish: {recipe.recipe.dishType}</Text>
            {/* als er cautions zijn, render cautions*/}
            {recipe.recipe.cautions.length > 0 && (
              <Text>
                Cautions: <br></br>
                {recipe.recipe.cautions.map((caution) => {
                  return (
                    <>
                      <Badge ml={"5px"} colorScheme={"red"}>
                        {caution}
                      </Badge>
                    </>
                  );
                })}
              </Text>
            )}
          </Box>
        ))}
      </Box>
    </>
  );
};
