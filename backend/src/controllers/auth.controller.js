
import bcrypt from 'bcryptjs';

import User from "../models/user.model.js";

import { createToken } from '../libs/jwt.js';
import { httpStatus } from '../libs/staticData.js';

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

        res.header('authToken', token)
        res.status(httpStatus.CREATED).json(jsResult);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error registering user' , error});
    }
}

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({
            username
        });

        if(!user){
            res.status(httpStatus.BAD_REQUEST).json({message: 'User not found'});
        }

        const matchPassword = await bcrypt.compare(password, user.password);

        if(!matchPassword){
            res.status(httpStatus.BAD_REQUEST).json({message: 'Invalid password'});
        }

        const token = await createToken({id: user._id});

        const jsResult = {
            username: user.username,
            email: user.email,
            id: user._id
        }

        res.header('authToken', token)
        res.status(httpStatus.CREATED).json(jsResult);
    }
    catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error logging in', error });
    }
}


export const logOut = async (req, res) => {
    try {
        res.header('authToken', '');
        res.status(httpStatus.OK).json({message: 'User logged out'});
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error logging out', error });
    }
}

export const profile = async(req, res) => {
    try {
        const userData = req.userData;

        const userFound = await User.findById(userData.id);

        if(!userFound){
            res.status(httpStatus.BAD_REQUEST).json({message: 'User not found'});
        }

        
        res.status(httpStatus.OK).json(userFound);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error profile', error });
    }
}