import React from "react";
import RecipeList from "../../components/RecipeList";
import { useFetch } from "../../hooks/useFetch";

function Home() {
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipes");

  return (
    <div className="dark:bg-slate-700">
      <div className="max-w-screen-lg mx-auto px-6 ">
        {recipes && <RecipeList recipes={recipes} />}
      </div>
    </div>
  );
}

export default Home;
