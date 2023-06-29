import {
  Image,
  Text,
  Box,
  Button,
  Badge,
  ListItem,
  List,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Nutrients } from "./Nutrients";
import uuid from "react-uuid";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Box
      bgColor={"white"}
      w={{ base: "500px", lg: "1000px" }}
      ml={"auto"}
      mr={"auto"}
      padding={"50px"}
    >
      <Button onClick={() => clickFn()} bgColor={"#e2cbdb"} mb={"50px"}>
        <ArrowBackIcon />
      </Button>

      <Image
        src={recipe.recipe.image}
        w={{ base: "200px", lg: "400px" }}
        h={{ base: "200px", lg: "400px" }}
        objectFit={"cover"}
        mb={"20px"}
        float={{ lg: "right" }}
      ></Image>

      <Box w={"400px"}>
        <Text textTransform={"uppercase"} fontWeight={"lighter"}>
          {recipe.recipe.mealType}
        </Text>
        <Text fontWeight={"700"} fontSize={"18px"}>
          {recipe.recipe.label}
        </Text>
        <Text>Cooking time: {recipe.recipe.totalTime}</Text>
        <Text>Servings: {recipe.recipe.yield}</Text>

        <Text fontWeight={"bold"}>Ingrediënts:</Text>

        <List>
          {recipe.recipe.ingredientLines.map((ingredient) => (
            <ListItem key={uuid()}>{ingredient.replaceAll("*", "")}</ListItem>
          ))}
        </List>

        <Box mt={"20px"}>
          <Text fontWeight={"bold"}>Health labels: </Text>
          <Text>
            {recipe.recipe.healthLabels.map((healthLabel) => {
              return (
                <Badge colorScheme={"purple"} mr={"5px"} key={uuid()}>
                  {healthLabel}
                </Badge>
              );
            })}
          </Text>

          {recipe.recipe.dietLabels.length > 0 && (
            <Text fontWeight={"bold"}>
              Diet: <br></br>
              {recipe.recipe.dietLabels.map((dietLabel) => {
                return (
                  <>
                    <Badge colorScheme={"green"} mr={"5px"} key={uuid()}>
                      {dietLabel}
                    </Badge>
                  </>
                );
              })}
            </Text>
          )}

          {recipe.recipe.cautions.length > 0 && (
            <Text fontWeight={"bold"}>
              Cautions: <br></br>
              {recipe.recipe.cautions.map((caution) => {
                return (
                  <>
                    <Badge mr={"5px"} colorScheme={"red"} key={uuid()}>
                      {caution}
                    </Badge>
                  </>
                );
              })}
            </Text>
          )}

          <Nutrients recipe={recipe} />
        </Box>
      </Box>
    </Box>
  );
};
