import { useFetch } from "../../hooks/useFetch";

import RecipeList from "../../components/RecipeList";
import "./Home.css";
import { useTheme } from "../../hooks/useTheme";
export default function Home() {
  // const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  const { data, isPending, error } = useFetch(
    "https://abdella-recipes-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
  );
  const { mode } = useTheme();
  return (
    <div className={`home ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading ">laoding.....</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
