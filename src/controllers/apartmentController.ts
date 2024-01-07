import { Request, Response } from "express";
import Apartment from "../models/apartmentModel";

export const getApartments = async (req: Request, res: Response) => {
  try {
    const apartments = await Apartment.find();
    res.json(apartments);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
