const authService = require("../services/authService");

const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }
        const response = await authService.registerUser(name, email, password);
        res.status(201).json(response);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
};

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const response = await authService.loginUser(email, password);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { registerUser, loginUser };