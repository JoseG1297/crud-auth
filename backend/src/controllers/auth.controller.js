import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
    const { email, password, username } = req.body
    
    try {

       const passwordHash = await bcrypt.hash(password, 10);

        const newUser =  new User({
            username,
            email,
            password: passwordHash
        });

        const user = await newUser.save();

        const jsResult = {
            username: user.username,
            email: user.email,
            id: user._id
        }

        res.status(201).json(jsResult);
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' , error});
    }
}

export const login = async (req, res) => {
    res.send('login');
}