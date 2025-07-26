// models/Supplier.js
import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
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

const Supplier = mongoose.model("Supplier", supplierSchema);

export default Supplier;
