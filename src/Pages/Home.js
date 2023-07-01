import { useRecipeContext } from "../Context/RecipesContext";
export const Home = () => {
  const { recipe, dispatch } = useRecipeContext();
  return (
    <div>
      <div>
        <input type="text" className="border border-solid border-blue-500" />
        <div>
          <label>
            <input type="checkbox" />
            Name
          </label>
          <label>
            <input type="checkbox" />
            Cuisine
          </label>{" "}
          <label>
            <input type="checkbox" />
            Incredients
          </label>{" "}
        </div>
      </div>
      <div>
        <ul>
          {recipe?.map((item) => (
            <li>
              <img src={item?.imgUrl} className="w-[10rem] h-[10rem]" />
              <p>{item?.name}</p>
              <p>{item?.ingredients.join(", ")}</p>
              <p>{item?.instructions.join(", ")}</p>
              <button className="border border-solid border-blue-500 p-2">
                edit
              </button>
              <button
                className="border border-solid border-blue-500 p-2"
                onClick={() =>
                  dispatch({ type: "delete_recipe", payload: item.id })
                }
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
