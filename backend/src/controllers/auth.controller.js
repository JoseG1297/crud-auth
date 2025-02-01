import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
    const { email, password, username } = req.body
    
    try {

       const passwordHash = await bcrypt.hash(password, 10);

        const user = await User.create({
            email,
            passwordHash,
            username
        });

        await user.save();

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' , error});
    }
}

export const login = async (req, res) => {
    res.send('login');
}