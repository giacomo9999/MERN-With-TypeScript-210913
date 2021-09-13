import { Router } from "express";
import {
  getFruits,
  addFruit,
  updateFruit,
  deleteFruit,
} from "../controllers/fruits";

const router: Router = Router();

router.get("/fruits", getFruits);
router.post("/add-fruit", addFruit);
router.put("/edit-fruit/:id", updateFruit);
router.delete("delete-fruit/:_id", deleteFruit);

export default router;
