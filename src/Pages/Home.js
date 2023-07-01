import { Modal } from "@mui/material";
import { v4 as uuid } from "uuid";
import { NavLink } from "react-router-dom";
import { useRecipeContext } from "../Context/RecipesContext";
import { useState } from "react";
export const Home = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const { recipe, dispatch } = useRecipeContext();
  const [editData, setEditData] = useState({});
  const [addRecipe, setAddRecipe] = useState({});

  const openEditModal = () => setShowEditModal(true);
  const closeEditModal = () => setShowEditModal(false);

  const openAddModal = () => setAddModal(true);
  const closeAddModal = () => setAddModal(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="mt-8 flex flex-col items-center gap-8">
      <div className=" flex gap-4 justify-center">
        <input
          type="text"
          placeholder="search-recipe"
          className="border border-solid border-blue-500 rounded-[1rem] px-4"
        />
        <div className=" flex gap-4 justify-center">
          <label>
            <input type="radio" name="search-recipe" />
            Name
          </label>
          <label>
            <input type="radio" name="search-recipe" />
            Cuisine
          </label>{" "}
          <label>
            <input type="radio" name="search-recipe" />
            Incredients
          </label>{" "}
        </div>
      </div>

      <p className="text-2xl text-center">List of recipes </p>
      <button
        className="text-xl text-center border border-solid border-blue-400 rounded-[1rem] py-1 px-2 "
        onClick={() => openAddModal()}
      >
        Add Recipe
      </button>
      <div>
        <ul className="flex justify-center gap-4">
          {recipe?.map((item) => (
            <li className=" flex flex-col gap-4 shadow-lg p-4 rounded-[1rem]">
              <img
                src={item?.imgUrl}
                className="w-[10rem] h-[10rem] rounded-[1rem]"
              />
              <p>
                <strong>name </strong> - {item?.name}
              </p>
              <p>
                {" "}
                <strong>cuisine </strong> - {item?.cuisine}
              </p>
              <p>
                <strong>ingredients </strong> -{" "}
                <NavLink to={`/recipeDetail/${item.id}`}>see more</NavLink>
              </p>
              <p>
                <strong>instructions</strong> -{" "}
                <NavLink to={`/recipeDetail/${item.id}`}>see more</NavLink>{" "}
              </p>
              <button
                className="  px-2 border border-solid border-black rounded-[1rem] mr-8"
                onClick={() => {
                  openEditModal();
                  setEditData(item);
                }}
              >
                edit
              </button>
              <button
                className="  px-2 border border-solid border-black rounded-[1rem] mr-8"
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
      <Modal
        open={showEditModal}
        onClose={closeEditModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{ ...style }}>
          <div className="bg-white">
            <label>
              name -{" "}
              <input
                value={editData?.name}
                onChange={(e) =>
                  setEditData({ ...editData, name: e.target.value })
                }
                type="text"
                className="border border-solid border-blue-500"
              />
            </label>
            <label>
              cuisine -{" "}
              <input
                value={editData?.cuisine}
                onChange={(e) =>
                  setEditData({ ...editData, cuisine: e.target.value })
                }
                type="text"
                className="border border-solid border-blue-500"
              />
            </label>
            <label className="flex flex-col">
              ingredients -{" "}
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                value={editData?.ingredients}
                onChange={(e) =>
                  setEditData({ ...editData, ingredients: e.target.value })
                }
              ></textarea>
            </label>
            <label className="flex flex-col">
              instructions -{" "}
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                value={editData?.instructions}
                onChange={(e) =>
                  setEditData({ ...editData, instructions: e.target.value })
                }
              ></textarea>
            </label>
            <button
              onClick={() => {
                dispatch({ type: "edit_recipe", payload: editData });
                closeEditModal();
              }}
            >
              Save Changes
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        open={addModal}
        onClose={closeAddModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <div style={{ ...style }}>
            <div className="bg-white flex flex-col gap-2">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setAddRecipe({
                    ...addRecipe,
                    imgUrl: URL.createObjectURL(e.target.files[0]),
                  });
                }}
              />
              <label>
                name -{" "}
                <input
                  value={addRecipe?.name}
                  onChange={(e) =>
                    setEditData({ ...editData, name: e.target.value })
                  }
                  type="text"
                  className="border border-solid border-blue-500"
                />
              </label>
              <label>
                cuisine -{" "}
                <input
                  value={addRecipe?.cuisine}
                  onChange={(e) =>
                    setEditData({ ...editData, cuisine: e.target.value })
                  }
                  type="text"
                  className="border border-solid border-blue-500"
                />
              </label>
              <label className="flex flex-col">
                ingredients -{" "}
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  value={addRecipe?.ingredients}
                  onChange={(e) =>
                    setEditData({ ...editData, ingredients: e.target.value })
                  }
                ></textarea>
              </label>
              <label className="flex flex-col">
                instructions -{" "}
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  value={addRecipe?.instructions}
                  onChange={(e) =>
                    setEditData({ ...editData, instructions: e.target.value })
                  }
                ></textarea>
              </label>
              <button
                onClick={() => {
                  dispatch({
                    type: "add_recipe",
                    payload: { ...addRecipe, id: uuid() },
                  });
                  closeAddModal();
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
