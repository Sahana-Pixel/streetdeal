# 🛒 StreetDeal — Vendor & Supplier Platform

This is a Node.js + Express backend for a platform that handles user registration and login for **vendors** and **suppliers** separately, using MongoDB and Mongoose.

---


---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Sahana-Pixel/streetdeal.git
cd backend

2. Install dependencies
- npm install

3. Create .env file
Create a .env file in the root directory and add:
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/vendor-supplier
JWT_SECRET=yourSecretKeyHere

4. Start the server
npm run dev

# Or regular start
npm start
Server runs at: http://localhost:5000

📬 API Endpoints
🔐 Register (POST /api/auth/register)
{
  "name": "Sahana",
  "email": "sahana@example.com",
  "phone": "9876543210",
  "password": "yourPassword",
  "role": "vendor" // or "supplier"
}
🔑 Login (POST /api/auth/login)
{
  "email": "sahana@example.com",
  "password": "yourPassword",
  "role": "vendor" // or "supplier"
}
