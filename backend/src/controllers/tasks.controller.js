
import Task from "../models/task.model.js";

import { httpStatus } from '../libs/staticData.js';

export const getTasks = async (req, res) => {
    try {
        const userId = req.userData.id;

        const tasks = await Task.find({user: userId}).populate('user');

        if(!tasks){
            res.status(httpStatus.BAD_REQUEST).json({message: 'Tasks not found'});
        }

        res.status(httpStatus.OK).json(tasks);

    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error registering user' , error});
    }
}

export const getTaskById = async (req, res) => {
    try {

        const taskId = req.params.id;

        const taskFound = await Task.findById(taskId);
        
        if(!taskFound){
            res.status(httpStatus.NOT_FOUND).json({message: 'Task not found'});
        }

        res.status(httpStatus.OK).json(taskFound);

    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error registering task' , error});
    }
}

export const createTask = async (req, res) => {
    
    const { tittle, description } = req.body
    
    try 
    {
        const userId = req.userData.id;

        const newTask =  new Task({
            tittle,
            description,
            user: userId
        });

        const taskCreated = await newTask.save();

        res.status(httpStatus.CREATED).json(taskCreated);
    } 
    catch (error) 
    {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error registering task' , error});
    }
}


export const updateTask = async (req, res) => {
    const { tittle, description } = req.body
    
    try 
    {
        const taskId = req.params.id;
        const taskUpdated = await Task.findByIdAndUpdate(taskId, req.body, {
            new: true
        })
        res.status(httpStatus.CREATED).json(taskUpdated);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error update user task' , error: error});
    }
}


export const deleteTask = async (req, res) => {
    
    try {
        const taskId = req.params.id;
        const taskDeleted = await Task.findByIdAndDelete(taskId, req.body)
        res.status(httpStatus.CREATED).json(taskDeleted);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error delete task' , error});
    }
}
