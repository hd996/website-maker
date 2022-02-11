import { Page } from '../model/page'

export const getPageByRoute = async (route: string) => {
  return await Page.findOne({
    where: {
      route,
    },
  })
}

export const createPage = async ({ name, route, title, description, keywords, metadata }) => {
  const page = await Page.findOne({
    where: {
      route,
    },
  })

  if (page) {
    return {
      code: 1000,
      msg: '已存在相同的页面路径',
    }
  }

  return await Page.create({
    name,
    route,
    title,
    description,
    keywords,
    metadata,
  })
}

export const updatePage = async ({ name, route, title, description, keywords, metadata, id }) => {
  return await Page.update(
    {
      name,
      route,
      title,
      description,
      keywords,
      metadata,
    },
    {
      where: {
        id,
      },
    }
  )
}
