import * as bodyparser from 'body-parser'
import { Router } from 'express'
import TodosCrud from '../../Controllers/Todos/Todos'

const jsonParser = bodyparser.json()

export const todoRouter = Router()

todoRouter
  .route('/')
  .post(jsonParser, TodosCrud.createTodo)
  .get(TodosCrud.getAllTodos)
