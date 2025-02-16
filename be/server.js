const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // JSON body parser
app.use(express.urlencoded({ extended: true })); // URL Encoded parser

app.use("/api/auth", require("./auth/routes/authRoutes"));

app.get("/", (req, res) => {
    res.send("API is running");
});

connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

