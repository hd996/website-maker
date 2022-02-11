import { Injectable, Inject } from '@nestjs/common'
import { Op } from 'sequelize'
import { Page } from './page.entity'

@Injectable()
export class PageService {
  constructor(
    @Inject('PAGE_MODEL')
    private pageModel: typeof Page
  ) {}

  async getPageList({ page, pageSize, keywords }): Promise<{ total: number; list: Page[] }> {
    const where: any = {}

    if (keywords) {
      where.name = {
        [Op.like]: `%${keywords}%`,
      }
    }

    const total = await this.pageModel.count({
      where,
    })

    const list = await this.pageModel.findAll({
      limit: Number(pageSize),
      offset: Number((page - 1) * pageSize),
      where,
    })

    return {
      total,
      list,
    }
  }

  async getPage(id: string): Promise<Page> {
    return await this.pageModel.findOne({
      where: {
        id,
      },
    })
  }

  async delPage(id: string): Promise<void> {
    const user = await this.pageModel.findOne({
      where: {
        id,
      },
    })
    await user.destroy()
  }
}
