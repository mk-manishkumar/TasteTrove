import React, { useEffect, useState, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { AppContext } from "../context/App_context";

function FetchRecipeById({ id }) {
  const location = useLocation();
  const { getRecipeById } = useContext(AppContext);
  const [recipe, setRecipe] = useState("");

  useEffect(() => {
    const fetchRecipe = async (id) => {
      const result = await getRecipeById(id);
      setRecipe(result.data.recipe);
    };

    fetchRecipe(id);
  }, [id]);

  return (
    <>
      <div className="text-center">
        <div
          className=" text-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="d-flex justify-content-center align-items-center p-3">
            <img
              src={recipe.imgurl}
              className="card-img-top"
              alt="..."
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "10px",
                border: "2px solid yellow",
              }}
            />
          </div>
          <h3>{recipe.title}</h3>
        </div>
        {location.pathname !== "/saved" && (
          <>
            <div
              className="container "
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <div className="left">
                <h4>
                  {recipe.ingredient1} - {recipe.quantity1}
                </h4>
                <h4>
                  {recipe.ingredient2} - {recipe.quantity2}
                </h4>
                <h4>
                  {recipe.ingredient3} - {recipe.quantity3}
                </h4>
                <h4>
                  {recipe.ingredient4} - {recipe.quantity4}
                </h4>
              </div>
              <div className="right" style={{ maxWidth: "500px" }}>
                {recipe.instruction}
              </div>
            </div>
            <Link to={"/"} className="btn btn-warning my-5">
              Back to Home
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default FetchRecipeById;
