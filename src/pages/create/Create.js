import { useState } from "react";
import "./Create.css";
export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [submited, setSubmited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime);
    setTitle("");
    setMethod("");
    setCookingTime("");
    setSubmited(true);
    setTimeout(() => {
      setSubmited(false);
    }, 2000);
  };

  return (
    <div className="create">
      {submited && <h5>your recipe has bee created</h5>}
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking Time (in minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className="btn">submit</button>
      </form>
    </div>
  );
}
