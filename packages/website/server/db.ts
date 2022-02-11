import pkg from 'sequelize'
import config from '@lib/config'

const { Sequelize } = pkg

export const DB = new Sequelize(config.mysql.website)
