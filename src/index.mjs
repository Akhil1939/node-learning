import 'dotenv/config'
import express from "express";
import { product_router } from "./routes/product.mjs";
import { connectDB } from "./db/connect.mjs";
const app = express();
const PORT = process.env.PORT || 3000;

const mockUsers = [
  {
    id: 1,
    username: "json chang",
    role: "admin",
  },
  {
    id: 2,
    username: "on dang",
    role: "admin",
  },
  {
    id: 3,
    username: "michel jacky",
    role: "admin",
  },
];

app.get("/api", (req, res) => {
  res.send("Welcome");
});

app.get("/api/users", (req, res) => {
  res.send(mockUsers);
});

app.use("/api/products", product_router);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log("listening on ", PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
