import request from 'supertest';
import app from '../src/app.js';

describe('Tasks API', () => {

    // Teste GET /api/tasks
    it('deve retornar lista de tarefas com status 200', async () => {
        const response = await request(app).get('/api/tasks');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    // Teste POST /api/tasks
    it('deve criar uma tarefa com status 201', async () => {
        const response = await request(app)
            .post('/api/tasks')
            .send({ title: 'Tarefa de teste', description: 'Descrição teste' });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('title', 'Tarefa de teste');
    });

});