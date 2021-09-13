import { Response, Request } from "express";
import { IFruit } from "../../types/fruit";
import Fruit from "../../models/fruit";

const getFruits = async (req: Request, res: Response): Promise<void> => {
  try {
    const fruits: IFruit[] = await Fruit.find();
    res.status(200).json({ fruits });
  } catch (error) {
    throw error;
  }
};

const addFruit = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      IFruit,
      "fruitName" | "fruitColor" | "fruitShape" | "fruitStatus"
    >;

    const fruit: IFruit = new Fruit({
      fruitName: body.fruitName,
      fruitColor: body.fruitColor,
      fruitShape: body.fruitShape,
      fruitStatus: body.fruitStatus,
    });

    const newFruit: IFruit = await fruit.save();
    const allFruits: IFruit[] = await Fruit.find();

    res
      .status(201)
      .json({ message: "Fruit added", fruit: newFruit, fruits: allFruits });
  } catch (error) {
    throw error;
  }
};

const updateFruit = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateFruit: IFruit | null = await Fruit.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allFruits: IFruit[] = await Fruit.find();
    res.status(200).json({
      message: "Fruit updated",
      fruit: updateFruit,
      fruits: allFruits,
    });
  } catch (error) {
    throw error;
  }
};

const deleteFruit = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedFruit: IFruit | null = await Fruit.findByIdAndRemove(
      req.params.id
    );
    const allFruits: IFruit[] = await Fruit.find();
    res
      .status(200)
      .json({
        message: "Fruit deleted",
        fruit: deletedFruit,
        fruits: allFruits,
      });
  } catch (error) {
    throw error;
  }
};

export { getFruits, addFruit, updateFruit, deleteFruit };
