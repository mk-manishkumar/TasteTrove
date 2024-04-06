import React, { useContext, useState } from "react";
import { AppContext } from "../context/App_context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const navigate = useNavigate();
  const { addRecipe } = useContext(AppContext);
  const [formData, setFormData] = useState({
    title: "",
    instruction: "",
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    quantity1: "",
    quantity2: "",
    quantity3: "",
    quantity4: "",
    imgurl: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const { title, instruction, ingredient1, ingredient2, ingredient3, ingredient4, quantity1, quantity2, quantity3, quantity4, imgurl } = formData;

    const result = await addRecipe(title, instruction, ingredient1, ingredient2, ingredient3, ingredient4, quantity1, quantity2, quantity3, quantity4, imgurl);

    toast.success(result.data.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <ToastContainer />

      <div
        className="container my-5 p-5"
        style={{
          width: "500px",
          border: "2px solid yellow",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center">Add Recipe</h2>
        <form
          onSubmit={onSubmitHandler}
          style={{
            width: "420px",
            margin: "auto",
          }}
          className="my-3 p-3"
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input value={formData.title} required onChange={onChangeHandler} name="title" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Instruction
            </label>
            <input value={formData.instruction} required onChange={onChangeHandler} name="instruction" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Ingredient One
            </label>
            <input value={formData.ingredient1} required onChange={onChangeHandler} name="ingredient1" type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Ingredient Two
            </label>
            <input value={formData.ingredient2} onChange={onChangeHandler} name="ingredient2" type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Ingredient Three
            </label>
            <input value={formData.ingredient3} onChange={onChangeHandler} name="ingredient3" type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Ingredient Four
            </label>
            <input value={formData.ingredient4} onChange={onChangeHandler} name="ingredient4" type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Quantity One
            </label>
            <input value={formData.quantity1} required onChange={onChangeHandler} name="quantity1" type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Quantity Two
            </label>
            <input value={formData.quantity2} onChange={onChangeHandler} name="quantity2" type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Quantity Three
            </label>
            <input value={formData.quantity3} onChange={onChangeHandler} name="quantity3" type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Quantity Four
            </label>
            <input value={formData.quantity4} onChange={onChangeHandler} name="quantity4" type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Image Url
            </label>
            <input value={formData.imgurl} required onChange={onChangeHandler} name="imgurl" type="text" className="form-control" id="exampleInputPassword1" />
          </div>

          <div className="container d-grid col-6">
            <button type="submit" className="btn btn-primary mt-3">
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRecipe;
