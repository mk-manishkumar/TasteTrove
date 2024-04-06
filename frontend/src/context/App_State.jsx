import React, { useEffect, useState } from "react";
import { AppContext } from "./App_context";
import axios from "axios";

function App_State(props) {
  const url = "";

  const [token, setToken] = useState("");
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      const api = await axios.get(`${url}/`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setRecipe(api.data.recipe);
    };
    fetchRecipe();
  }, []);

  // register
  const register = async (name, email, password) => {
    const api = await axios.post(
      `${url}/register`,
      {
        name,
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return api;
  };

  // login
  const login = async (email, password) => {
    const api = await axios.post(
      `${url}/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    setToken(api.data.token);
    return api;
  };

  // Add recipe
  const addRecipe = async (title, instruction, ingredient1, ingredient2, ingredient3, ingredient4, quantity1, quantity2, quantity3, quantity4, imgurl) => {
    const api = await axios.post(
      `${url}/addrecipe`,
      {
        title,
        instruction,
        ingredient1,
        ingredient2,
        ingredient3,
        ingredient4,
        quantity1,
        quantity2,
        quantity3,
        quantity4,
        imgurl,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Auth: token,
        },
        withCredentials: true,
      }
    );
    return api;
  };

  // RecipeById
  const getRecipeById = async (id) => {
    const api = await axios.get(
      `${url}/${id}`,

      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return api;
  };

  return (
    <AppContext.Provider
      value={{
        login,
        register,
        addRecipe,
        recipe,
        getRecipeById,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default App_State;
