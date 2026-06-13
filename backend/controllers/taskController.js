const Task = require("../models/Task");

const getTasks = async(req,res)=>{
    const tasks = await Task.find();
    res.json(tasks);
};

const createTask = async(req,res)=>{
    const task = await Task.create(req.body);
    res.status(201).json(task);
};

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

const updateTask = async (req, res) => {
    try {

        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        task.status =
            task.status === "Pending"
                ? "Completed"
                : "Pending";

        await task.save();

        res.status(200).json(task);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

module.exports = {
    getTasks,
    createTask,
    deleteTask,
    updateTask
};