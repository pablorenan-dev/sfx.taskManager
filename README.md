# Task Manager

## Sobre o projeto
Projeto de uma lista de tarefas (To-do list/task manager), que utiliza uma api, e um banco de dados para salvar os dados e mostrar no front

## Tecnologias utilizadas
React, Node.js, Express, PostgreSQL, Jest

## Pré-requisitos
- Node.js 20+
- PostgreSQL instalado e rodando

## Instalação e execução

### Banco de dados
1. Crie o banco `db_task_manager`
2. Execute o script SQL:
```sql
  CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  completed BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```
(também está no arquivo "database.sql" na root)

### Backend
```bash
cd backend
npm install
# configure o .env baseado no .env.example
npm start
```

### Frontend
```bash
cd taskManager
npm install
npm run dev
```

## Variáveis de ambiente
Veja o `.env.example` dentro da pasta `backend/`

## Endpoints da API
| Método | Rota | Descrição |
|---|---|---|
| GET | /api/tasks | Lista todas as tarefas |
| POST | /api/tasks | Cria uma tarefa |
| PATCH | /api/tasks/:id | Alterna status da tarefa |
| DELETE | /api/tasks/:id | Deleta uma tarefa |

## Testes
```bash
cd backend
npm test
```

## Exemplos de chamadas à API

### Criar tarefa
POST /api/tasks
Content-Type: application/json
```json
{
  "title": "Minha tarefa",
  "description": "Descrição opcional"
}
```

### Listar tarefas
GET /api/tasks

### Alternar status
PATCH /api/tasks/1

### Deletar tarefa
DELETE /api/tasks/1

## Rodando com Docker

```bash
docker-compose up --build
```

A stack completa (backend + banco de dados) sobe automaticamente.
A tabela é criada automaticamente na primeira execução.

> Certifique-se de ter o Docker Desktop instalado e rodando antes de executar o comando.
