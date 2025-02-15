const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
app.use(express.json());


const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // JSON body parser
app.use(express.urlencoded({ extended: true })); // URL Encoded parser

app.get("/", (req, res) => {
    res.send("API is running");
});

connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

