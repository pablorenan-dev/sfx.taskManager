import pool from '../config/db.js';

// listar todas as tarefas
export const getAllTasks = async ()=> {
    const result = await pool.query('SELECT * FROM tasks');
    return result.rows;
};

// criar uma task no banco, com o tiutlo e descricao
export const createTask = async (title, description) => {
    const result = await pool.query(
        'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *',
        [title, description]
    );
    return result.rows[0];
};

// atualiza se a task esta completa pelo id, com toggle, se for falso vira true, se for true vira falso
export const updateTask = async (id) => {
    const result = await pool.query(
        'UPDATE tasks SET completed = NOT completed WHERE id = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};

// deleta a task pelo id
export const deleteTask = async (id) => {
    await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
};