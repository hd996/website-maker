import { Sequelize } from 'sequelize-typescript'
import { Page } from '../page/page.entity'
import * as config from '@lib/config'

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(config.mysql.website)
      sequelize.addModels([Page])
      // await sequelize.sync()
      return sequelize
    },
  },
]
