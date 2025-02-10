import { useSelector, useDispatch } from "react-redux";

import { createTaskService, getTasksService, updateTaskService, deleteTaskService } from "../api/task";
import { setTasks, setTask, clearTask, setTaskErrors } from "../slice/taskSlice";

export const useTaskReducer = () => {
    const dispatch = useDispatch();

    const getTasks = async () => {
        try {
            const response = await getTasksService();
            if (response) {
                setTasksReducer(response?.data);
            }
        } catch (error) {
            setTaskErrorsReducer(error?.response?.data);
        }
    };

    const createTask = async (task) => {
        try {
            const response = await createTaskService(task);
            if (response) {
                getTasks();
            }
        } catch (error) {
            setTaskErrorsReducer(error?.response?.data);
        }
    };

    const updateTask = async (task) => {
        try {
            const response = await updateTaskService(task);
            if (response) {
                getTasks();
            }
        } catch (error) {
            setTaskErrorsReducer(error?.response?.data);
        }
    };

    const deleteTask = async (id) => {
        try {
            const response = await deleteTaskService(id);
            if (response) {
                getTasks();
            }
        } catch (error) {
            setTaskErrorsReducer(error?.response?.data);
        }
    };

    const setTaskReducer = (data) => {
        dispatch(setTask(data));
        console.log("Task", data);
    };

    const clearTaskReducer = () => {
        dispatch(clearTask());
        console.log("clearTask");
    };

    const setTaskErrorsReducer = (errors) => {
        dispatch(setTaskErrors(errors));
        console.log("errors", errors);
    };


    const setTasksReducer = (data) => {
        dispatch(setTasks(data));
        console.log("Tasks", data);
    };
    
    const tasks = useSelector((state) => state.taskData.tasks);
    const task = useSelector((state) => state.taskData.task);
    const errors = useSelector((state) => state.taskData.errors);

    return {
        getTasks,
        createTask,
        updateTask,
        deleteTask,
        setTaskReducer,
        clearTaskReducer,
        tasks,
        task,
        errors,
    };
};
