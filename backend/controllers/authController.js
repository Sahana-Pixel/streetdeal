import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Vendor from "../models/Vendor.js";
import Supplier from "../models/Supplier.js";

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const registerUser = async (req, res) => {
  const { name, email, phone, password, location, role } = req.body;

  if (!role || !["vendor", "supplier"].includes(role)) {
    return res.status(400).json({ message: "Invalid or missing role" });
  }
  
  try {
    const Model = role === "vendor" ? Vendor : Supplier;

    const existingUser = await Model.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Model({
      name,
      email: email.toLowerCase(),
      phone,
      password: hashedPassword,
      location,
    });

    await newUser.save();

    res.status(201).json({
      message: `${role} registered successfully`,
      token: generateToken(newUser._id, role),
    });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password, role } = req.body;

  if (!role || !["vendor", "supplier"].includes(role)) {
    return res.status(400).json({ message: "Invalid or missing role" });
  }

  try {
    const Model = role === "vendor" ? Vendor : Supplier;
    const user = await Model.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    res.status(200).json({
      message: `${role} logged in successfully`,
      token: generateToken(user._id, role),
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};
