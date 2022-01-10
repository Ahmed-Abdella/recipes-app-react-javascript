import "./Recipe.css";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";
export default function Recipe() {
  const { id } = useParams();
  console.log(id);
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, error, isPending } = useFetch(url);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTimeout(() => navigate("/"), 2000);
    }
  }, [error]);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">laoding...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}
