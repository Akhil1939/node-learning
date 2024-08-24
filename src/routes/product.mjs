import express from "express";
import {getAllProducts} from "../controllers/product.mjs";
export const product_router = express.Router();

product_router.route("/").get(getAllProducts);

// export {product_router}
        