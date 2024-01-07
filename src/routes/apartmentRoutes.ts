import express from "express";
import { getApartments } from "../controllers/apartmentController";

const router = express.Router();

router.get("/", getApartments);

export default router;
