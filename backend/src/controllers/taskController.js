import {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
}

from "../models/taskModel.js";

// GET /api/tasks

export const getAllTasksController = async (req, res) => {
    try{
        const tasks = await getAllTasks();
        res.status(200).json(tasks);
    } catch (error){
        console.log(error)
        res.status(500).json({message: 'erro ao buscar tarefas', error})
    }
};

// POST /api/tasks
export const createTaskController = async (req, res) => {
    try{
        const {title, description} = req.body;
        if (!title){
            return res.status(400).json({message: 'Titulo e obrigatorio.'});
        }
        
        const task = await createTask(title, description);
        res.status(201).json(task);
    } catch(error){
        res.status(500).json({message: "Erro ao criar tarefa", error});
    }
};

// PATCH /api/tasks/:id
export const updateTaskController = async (req, res) => {
    try{    
        const {id} = req.params;
        const task = await updateTask(id);
        if (!task){
            return res.status(404).json({message: "tarefa nao encontrada"});
        }
        res.status(200).json(task);
    }catch (error){
        res.status(500).json({ message: "erro ao atualizar tarefa", error});
    }
}

// DELETE /api/tasjs/:id
export const deleteTaskController = async (req, res) => {
    try{
        const {id} = req.params;
        await deleteTask(id);
        res.status(200).json({message: "Tarefa deletada com sucesso"});
    }catch(e){
        res.status(500).json({ message: "Erro ao deletar tarefa"});
    }
}