import { createContext, useContext, useReducer, useState } from "react";
import { data } from "../Data";

export const RecipeContext = createContext();
const recipeReducer = (state, action) => {
  switch (action.type) {
    case "delete_recipe":
      return state?.filter((item) => item.id !== action.payload);
    case "edit_recipe":
      return state?.map((item) =>
        item?.id === action.payload.id ? action.payload : item
      );
    case "add_recipe":
      return [...state, action.payload];
  }
};
export const RecipeContextProvider = ({ children }) => {
  const [recipe, dispatch] = useReducer(recipeReducer, data);

  return (
    <RecipeContext.Provider value={{ recipe, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => {
  return useContext(RecipeContext);
};
