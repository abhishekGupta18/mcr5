import { useParams } from "react-router-dom";
import { useRecipeContext } from "../Context/RecipesContext";
export const RecipeDetail = () => {
  const { recipeId } = useParams();
  const { recipe } = useRecipeContext();

  const findRecipe = recipe?.find((item) => item.id === Number(recipeId));
  console.log(findRecipe);
  return (
    <div className=" w-full flex justify-center items-center gap-8">
      <img src={findRecipe?.imgUrl} className="w-[20rem] h-[20rem]" />
      <div>
        <p>{findRecipe?.name}</p>
        <p> cuisine - {findRecipe?.cuisine}</p>
        <p> ingredients - {findRecipe?.ingredients}</p>
        <p> instructions - {findRecipe?.instructions}</p>
      </div>
    </div>
  );
};
