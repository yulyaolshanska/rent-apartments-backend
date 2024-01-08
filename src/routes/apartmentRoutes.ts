import express from "express";
import {
  addApartment,
  getApartments,
} from "../controllers/apartmentController";

const router = express.Router();

router.get("/", getApartments);
router.post("/add", addApartment);

export default router;
