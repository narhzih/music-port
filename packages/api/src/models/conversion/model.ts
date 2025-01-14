import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";

import { PlatformValues } from "../../utils/platform";

import type { IConversion } from "./type";


const ConversionSchema = new Schema<IConversion>(
  {
    importLink: { type: String, required: true },
    exportLink: { type: String, required: true },
    toPlatform: { type: String, enum: PlatformValues, required: true },
    playlistId: { type: ObjectId },
  },
  { timestamps: true },
);

ConversionSchema.index({
  importLink: 1,
  exportLink: 1,
  playlistId: 1,
});

export default model<IConversion>("Conversion", ConversionSchema);
