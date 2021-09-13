import { Document } from "mongoose";

export interface IFruit extends Document {
  fruitName: string;
  fruitColor: string;
  fruitShape: string;
  fruitStatus: boolean;
}
