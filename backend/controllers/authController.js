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
  const { name, email, phone, password, role } = req.body;

  if (!role || !["vendor", "supplier"].includes(role)) {
    return res.status(400).json({ message: "Invalid or missing role" });
  }

  try {
    const Model = role === "vendor" ? Vendor : Supplier;
    const existingUser = await Model.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new Model({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({
      message: `${role} registered successfully`,
      token: generateToken(user._id, role),
    });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error });
  }
};

export const loginUser = async (req, res) => {
  const { email, password, role } = req.body;

  if (!role || !["vendor", "supplier"].includes(role)) {
    return res.status(400).json({ message: "Invalid or missing role" });
  }

  try {
    const Model = role === "vendor" ? Vendor : Supplier;
    const user = await Model.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or user not found" });
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
    res.status(500).json({ message: "Login failed", error });
  }
};
