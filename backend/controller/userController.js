import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email: email }); // Fixed: findOne (capital O)
        if (user) {
            return res.status(400).json({ message: "User already exists" }); // Fixed typo: "already"
        }
        const passwordHashed = await bcrypt.hash(password, 10); // Fixed: added await and typo
        const createdNewUser = new User({
            fullname: fullname,
            email: email,
            password: passwordHashed // Fixed: variable name
        });
        await createdNewUser.save();
        res.status(201).json({ message: "Created successfully" }); // Fixed typo: "successfully"
    } catch (error) {
        console.log("Error:" + error.message);
        res.status(500).json({ message: "Error occurred! Please try again later" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }
        
        res.status(200).json({
            message: "User login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });
    } catch (error) {
        console.log("Error:" + error.message);
        res.status(500).json({ message: "Error occurred! Please try again later" });
    }
};