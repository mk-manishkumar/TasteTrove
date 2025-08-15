import Food from "../models/Food.model.js";
import Order from "../models/Order.model.js";

// CREATE FOOD
export const createFoodController = async (req, res) => {
  try {
    const { title, description, price, imageUrl, foodTags, catgeory, code, isAvailabe, resturnat, rating } = req.body;
    if (!title || !description || !price || !resturnat) {
      return res.status(500).send({ success: false, message: "Please Provide all fields" });
    }
    const newFood = new Food({
      title,
      description,
      price,
      imageUrl,
      foodTags,
      catgeory,
      code,
      isAvailabe,
      resturnat,
      rating,
    });
    await newFood.save();
    res.status(201).send({ success: true, message: "New Food Item Created", newFood });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error in create food api", error });
  }
};

// GET ALL FOODS
export const getAllFoodsController = async (req, res) => {
  try {
    const foods = await Food.find({});
    if (!foods) {
      return res.status(404).send({ success: false, message: "no food items was found" });
    }
    res.status(200).send({ success: true, totalFoods: foods.length, foods });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error In Get ALL Foods API", error });
  }
};

// GET SINGLE FOOD
export const getSingleFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      return res.status(404).send({ success: false, message: "please provide id" });
    }
    const food = await Food.findById(foodId);
    if (!food) {
      return res.status(404).send({ success: false, message: "No Food Found with this id" });
    }
    res.status(200).send({ success: true, food });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error In get Single Food API", error });
  }
};

// GET FOOD BY RESTAURANT
export const getFoodByRestaurantController = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    if (!restaurantId) {
      return res.status(404).send({ success: false, message: "please provide id" });
    }
    const food = await Food.find({ resturnat: restaurantId });
    if (!food) {
      return res.status(404).send({ success: false, message: "No Food Found with this id" });
    }
    res.status(200).send({ success: true, message: "food base on restaurant", food });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error In get Single Food API", error });
  }
};

// UPDATE FOOD
export const updateFoodController = async (req, res) => {
  try {
    const foodID = req.params.id;
    if (!foodID) {
      return res.status(404).send({ success: false, message: "no food id was found" });
    }
    const food = await Food.findById(foodID);
    if (!food) {
      return res.status(404).send({ success: false, message: "No Food Found" });
    }
    const { title, description, price, imageUrl, foodTags, catgeory, code, isAvailabe, resturnat, rating } = req.body;
    await Food.findByIdAndUpdate(foodID, { title, description, price, imageUrl, foodTags, catgeory, code, isAvailabe, resturnat, rating }, { new: true });
    res.status(200).send({ success: true, message: "Food Item Was Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error In Update Food API", error });
  }
};

// DELETE FOOD
export const deleteFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      return res.status(404).send({ success: false, message: "provide food id" });
    }
    const food = await Food.findById(foodId);
    if (!food) {
      return res.status(404).send({ success: false, message: "No Food Found with id" });
    }
    await Food.findByIdAndDelete(foodId);
    res.status(200).send({ success: true, message: "Food Item Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error In Delete Food API", error });
  }
};

// PLACE ORDER
export const placeOrderController = async (req, res) => {
  try {
    const { cart } = req.body;
    if (!cart) {
      return res.status(500).send({ success: false, message: "please food cart or payment method" });
    }
    let total = 0;
    cart.forEach((i) => {
      total += i.price;
    });
    const newOrder = new Order({
      foods: cart,
      payment: total,
      buyer: req.body.id,
    });
    await newOrder.save();
    res.status(201).send({ success: true, message: "Order Placed successfully", newOrder });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error In Place Order API", error });
  }
};

// CHANGE ORDER STATUS
export const orderStatusController = async (req, res) => {
  try {
    const orderId = req.params.id;
    if (!orderId) {
      return res.status(404).send({ success: false, message: "Please Provide valid order id" });
    }
    const { status } = req.body;
    await Order.findByIdAndUpdate(orderId, { status }, { new: true });
    res.status(200).send({ success: true, message: "Order Status Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error In Order Status API", error });
  }
};
