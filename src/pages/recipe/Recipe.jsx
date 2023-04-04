import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, error, isPending } = useFetch(url);
  return (
    <div className="dark:bg-slate-700 h-[75vh]">
      <div className="text-center max-w-screen-lg mx-auto px-6 ">
        {recipe && (
          <div
            key={recipe.id}
            className="border p-2 text-left rounded flex flex-col gap-2 bg-slate-100 dark:bg-slate-400"
          >
            <h1 className="text-center font-bold text-2xl mb-3">
              {recipe.title}
            </h1>
            <p>
              <span className="font-bold">Cooking Time: </span>{" "}
              {recipe.cookingTime}
            </p>
            <div>
              <span className="font-bold">Ingredients: </span>
              {recipe.ingredients.map((ing) => {
                return <span key={ing}>{ing}, </span>;
              })}
            </div>
            <p className="mb-auto">
              <span className="font-bold">Method: </span> {recipe.method}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recipe;
