import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const DBConfig = require('../config/config')
const env = process.env.NODE_ENV || 'development'
const config = DBConfig[env]

const sequelize = new Sequelize.Sequelize(config.url as string, config)

interface Database {
  sequelize: Sequelize.Sequelize
  Sequelize: Sequelize.SequelizeStatic
}

const db: Database = {
  sequelize,
  Sequelize: Sequelize.Sequelize
}

Object.keys(db).forEach((modelName): void => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

export default db
