import Category from "../models/Category.model.js";

// CREATE CATEGORY
export const createCatController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    if (!title) {
      return res.status(500).send({ success: false, message: "please provide category title or image" });
    }
    const newCategory = new Category({ title, imageUrl });
    await newCategory.save();
    res.status(201).send({ success: true, message: "category created", newCategory });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error In Create Cat API", error });
  }
};

// GET ALL CATEGORIES
export const getAllCatController = async (req, res) => {
  try {
    const categories = await Category.find({});
    if (!categories) {
      return res.status(404).send({ success: false, message: "No Categories found" });
    }
    res.status(200).send({ success: true, totalCat: categories.length, categories });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error in get All Category API", error });
  }
};

// UPDATE CATEGORY
export const updateCatController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, imageUrl } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(id, { title, imageUrl }, { new: true });
    if (!updatedCategory) {
      return res.status(500).send({ success: false, message: "No Category Found" });
    }
    res.status(200).send({ success: true, message: "Category Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "error in update cat api", error });
  }
};

// DELETE CATEGORY
export const deleteCatController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(500).send({ success: false, message: "Please provide Category ID" });
    }
    const category = await Category.findById(id);
    if (!category) {
      return res.status(500).send({ success: false, message: "No Category Found With this id" });
    }
    await Category.findByIdAndDelete(id);
    res.status(200).send({ success: true, message: "category Deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "error in Delete Cat API", error });
  }
};
