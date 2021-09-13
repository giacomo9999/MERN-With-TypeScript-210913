import express, { Express } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import fruitRoutes from "./routes";

require("dotenv").config();

const app: Express = express();
const PORT: string | number = process.env.PORT || 4000;

app.use(cors);
app.use(fruitRoutes);

const uri: string = process.env.CONN_STR || "";
console.log(uri);

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

mongoose.connect(uri).then(()=>{console.log("Connected to MongoDB Atlas.")});
