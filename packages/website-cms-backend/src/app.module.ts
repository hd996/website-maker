import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

import { PageModule } from './modules/page/page.module'
import { DatabaseModule } from './modules/database/database.module'

@Module({
  imports: [
    PageModule,
    DatabaseModule,

    // https://docs.nestjs.com/recipes/serve-static
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../website-cms-frontend/dist'),
      exclude: ['/api*'],
    }),
  ],
})
export class AppModule {}
