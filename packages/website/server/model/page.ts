import pkg from 'sequelize'
import { DB } from '../db'

const { DataTypes } = pkg
const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: DataTypes.STRING,
  },

  title: {
    type: DataTypes.STRING,
  },

  description: {
    type: DataTypes.STRING,
  },

  keywords: {
    type: DataTypes.STRING,
  },

  route: {
    type: DataTypes.STRING,
  },

  metadata: {
    type: DataTypes.STRING,
  },

  createdTime: {
    type: DataTypes.DATE,
    field: 'created_time',
  },

  updatedTime: {
    type: DataTypes.DATE,
    field: 'updated_time',
  },

  deletedTime: {
    type: DataTypes.DATE,
    field: 'deleted_time',
  },

  createdBy: {
    type: DataTypes.STRING,
    field: 'created_by',
  },

  updatedBy: {
    type: DataTypes.STRING,
    field: 'updated_by',
  },

  deletedBy: {
    type: DataTypes.STRING,
    field: 'deleted_by',
  },
}

export const Page = DB.define('pages', schema, {
  tableName: 'pages',
  timestamps: false,
})
