// models/Vendor.js
import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: String,
  password: {
    type: String,
    required: true,
  },
});

const Vendor = mongoose.model("Vendor", vendorSchema);

export default Vendor;
