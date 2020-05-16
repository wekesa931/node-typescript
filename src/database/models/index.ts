import Sequelize from 'sequelize'
import dotenv from 'dotenv'
import { TodoInstance, ToDoAttributes, TodoInit } from './todo'

dotenv.config()

const DBConfig = require('../config/config')
const env = process.env.NODE_ENV || 'development'
const config = DBConfig[env]

const sequelize = new Sequelize.Sequelize(config.url as string, config)

interface Database {
  sequelize: Sequelize.Sequelize
  Sequelize: Sequelize.SequelizeStatic
  Todos: Sequelize.Model<TodoInstance, ToDoAttributes>
}

const db: Database = {
  sequelize,
  Sequelize: Sequelize.Sequelize,
  Todos: TodoInit(sequelize)
}

Object.keys(db).forEach((modelName): void => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

export default db
