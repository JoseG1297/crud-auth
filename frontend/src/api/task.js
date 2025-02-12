import axiosInstance from './axios';

export const getTasksService = async () => {
    const response = await axiosInstance.get('/tasks');
    return response;
};

export const createTaskService = async (task) => {
    const response = await axiosInstance.post('/tasks', task);
    return response;
}

export const updateTaskService = async (task) => {
    const response = await axiosInstance.put(`/tasks/${task._id}`, task);
    return response;
}

export const deleteTaskService = async (id) => {
    const response = await axiosInstance.delete(`/tasks/${id}`);
    return response;
}