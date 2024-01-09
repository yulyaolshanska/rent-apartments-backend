import { Request, Response } from "express";
import Apartment from "../models/apartmentModel";
import cloudUpload from "../services/cloudUpload";
import parseFormData from "../services/parseFormData";

export const getApartments = async (req: Request, res: Response) => {
  try {
    const apartments = await Apartment.find();
    res.json(apartments);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addApartment = async (req: Request, res: Response) => {
  try {
    const { fields, files } = await parseFormData(req);
    const { title, description, type, address, price, lat, lng } = fields;
    const { image } = files;
    console.log("image", image);
    let mainImageURL;
    if (image) {
      const path = image[0].filepath;
      mainImageURL = await cloudUpload(path);
    }
    const data = {
      title: title && title[0],
      description: description && description[0],
      mainImageURL,
      type,
      address,
      price,
      lat,
      lng,
    };

    const newApartment = await Apartment.create(data);
    res.status(201).json(newApartment);
  } catch (error) {
    console.error("Error adding apartment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
