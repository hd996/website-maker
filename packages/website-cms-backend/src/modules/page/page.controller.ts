import { Controller, Get, Param, Delete, Query } from '@nestjs/common'
import { PageService } from './page.service'
import { Page } from './page.entity'

@Controller('page')
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Get('list')
  getPageList(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
    @Query('keywords') keywords: string
  ): Promise<{ total: number; list: Page[] }> {
    return this.pageService.getPageList({ page, pageSize, keywords })
  }

  @Get(':id')
  getPage(@Param('id') id: string): Promise<Page> {
    return this.pageService.getPage(id)
  }

  @Delete(':id')
  delPage(@Param('id') id: string): Promise<void> {
    return this.pageService.delPage(id)
  }
}
