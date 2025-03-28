import { useState, useEffect } from "react";
import styles from "../css/search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "64123636c6a34893bd5e0f3785ee22b6";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        onChange={(event) => setQuery(event.target.value)}
        type="text"
        value={query}
        placeholder="Enter a food here.."
      />
    </div>
  );
}
