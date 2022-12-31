import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import "./SearchBar.css";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const { mode } = useTheme();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${term}`);
  };
  return (
    <div className={`searchbar ${mode}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="search.."
          onChange={(e) => setTerm(e.target.value)}
        />

        <button className="search-button">search</button>
      </form>
    </div>
  );
}
