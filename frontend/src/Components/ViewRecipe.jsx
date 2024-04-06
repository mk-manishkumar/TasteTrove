import React, { useContext } from "react";
import { AppContext } from "../context/App_context";
import { useParams } from "react-router-dom";
import FetchRecipeById from "./Components/FetchRecipeById";

function ViewRecipe() {
  const id = useParams();
  return (
    <>
      <FetchRecipeById id={id}/>
    </>
  );
}

export default ViewRecipe;
