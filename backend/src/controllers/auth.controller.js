import User from "../models/user.model.js";

export const register = async (req, res) => {
    const { email, password, username } = req.body
    
    try {
        const user = await User.create({
            email,
            password,
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