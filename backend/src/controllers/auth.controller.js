
import bcrypt from 'bcryptjs';

import User from "../models/user.model.js";
import { createToken } from '../libs/jwt.js';

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

        const token = await createToken({id: user._id});

        const jsResult = {
            username: user.username,
            email: user.email,
            id: user._id
        }

        res.header('auth-token', token)
        res.status(201).json(jsResult);
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' , error});
    }
}

export const login = async (req, res) => {
    res.send('login');
}