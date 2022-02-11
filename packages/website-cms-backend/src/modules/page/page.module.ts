import { Module } from '@nestjs/common'

import { PageController } from './page.controller'
import { PageService } from './page.service'
import { pageProviders } from './page.providers'
import { DatabaseModule } from '../database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [PageController],
  providers: [PageService, ...pageProviders],
})
export class PageModule {}
