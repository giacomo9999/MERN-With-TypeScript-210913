import { IFruit } from "../types/fruit";
import { model, Schema } from "mongoose";

const fruitSchema: Schema = new Schema(
  {
    fruitName: { type: String, required: true },
    fruitColor: { type: String, required: true },
    fruitShape: { type: String, required: true },
    fruitStatus: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default model<IFruit>("Fruit", fruitSchema);
