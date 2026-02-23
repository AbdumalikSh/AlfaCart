import express from "express";
import { upload } from "../configs/multer.js";
import {
  addProduct,
  changeStock,
  productById,
  productList,
} from "../controllers/productController";

const productRoute = express.Router();

productRoute.post("/add", upload.array([images]), authSeller, addProduct);
productRoute.get("/list", productList);
productRoute.get("/id", productById);
productRoute.post("/stock", authSeller, changeStock);

export default productRoute;
