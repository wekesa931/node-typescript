// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Todo = sequelize.define('Todo', {
//     title: DataTypes.STRING
//   }, {});
//   Todo.associate = function(models) {
//     // associations can be defined here
//   };
//   return Todo;
// };

/* tslint:disable */
import * as Sequelize from 'sequelize'
import { SequelizeAttributes } from '../../types/sequelize'

export interface ToDoAttributes {
  id?: string
  title: string
  createdAt?: string
  updatedAt?: string
}

export type TodoInstance = Sequelize.Instance<ToDoAttributes> & ToDoAttributes

export const TodoInit = (sequalize: Sequelize.Sequelize): Sequelize.Model<TodoInstance, ToDoAttributes> => {
  const attributes: SequelizeAttributes<ToDoAttributes> = {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }
  const Todo = sequalize.define<TodoInstance, ToDoAttributes>('Todo', attributes, {
    tableName: 'Todos',
  })

  return Todo
}
