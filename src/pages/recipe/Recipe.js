import "./Recipe.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
export default function Recipe() {
  const { id } = useParams();
  console.log(id);
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, error, isPending } = useFetch(url);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">laoding...</p>}
      {recipe && <h1>{recipe.title}</h1>}
    </div>
  );
}
