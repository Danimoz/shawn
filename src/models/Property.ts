import { Schema, Document, model, models } from "mongoose";

export interface IProperty extends Document {
  address: string;
  price: string;
  bedroom?: number;
  bathroom?: number;
  features?: string;
  images?: Buffer[];
  type?: string;
  size?: string;
  description?: string;
}

const propertySchema = new Schema<IProperty>({
  address: { type: String, required: true },
  price: { type: String, required: true },
  bedroom: Number,
  bathroom: Number,
  features: String,
  images: [Buffer],
  type: String,
  size: String,

}, {
  timestamps: true
});

const Property = models.Property || model<IProperty>('Property', propertySchema)
export default Property