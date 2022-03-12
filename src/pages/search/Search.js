import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Search.css";
import RecipeList from "../../components/RecipeList";
import { useTheme } from "../../hooks/useTheme";
export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  // const url = "http://localhost:3000/recipes?q=" + query;
  const url =
    "https://abdella-recipes-default-rtdb.europe-west1.firebasedatabase.app/recipes.json?q=" +
    query;
  const { error, isPending, data } = useFetch(url);
  const { mode } = useTheme();

  return (
    <div className={`search ${mode}`}>
      <h2 className="page-title">Recipe including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">loading....</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
