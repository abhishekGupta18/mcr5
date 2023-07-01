import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { RecipeDetail } from "./Pages/RecipeDetail";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipeDetail/:recipeId" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
// https://guileless-tanuki-f89c90.netlify.app/
