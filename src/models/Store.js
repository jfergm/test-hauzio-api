import { Schema, model } from "mongoose";

const Store = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number], // [lon, lat]
    },
  },
})

export default model("store", Store)
