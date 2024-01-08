import { Document, Schema, model } from "mongoose";

interface IApartment extends Document {
  title: string;
  description: string;
  image: string;
  type: string;
  address: string;
  price: number;
  lat: number;
  lng: number;
}

const apartmentSchema = new Schema<IApartment>({
  title: String,
  description: String,
  image: String,
  type: String,
  address: String,
  price: Number,
  lat: Number,
  lng: Number,
});

export default model<IApartment>("Apartment", apartmentSchema);
