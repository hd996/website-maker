import { PageDraft } from '../model/page-draft'

export const getPageDraftByRoute = async (route: string) => {
  return await PageDraft.findOne({
    where: {
      route,
    },
  })
}

export const createPageDraft = async ({ name, route, title, description, keywords, metadata }) => {
  const pageDraft = await PageDraft.findOne({
    where: {
      route,
    },
  })

  if (pageDraft) {
    return {
      code: 1000,
      msg: '已存在相同的页面路径',
    }
  }

  return await PageDraft.create({
    name,
    route,
    title,
    description,
    keywords,
    metadata,
  })
}

export const updatePageDraftById = async ({ name, route, title, description, keywords, metadata, id }) => {
  return await PageDraft.update(
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

export const updatePageDraftByRoute = async ({
  name,
  route,
  title,
  description,
  keywords,
  metadata,
  originalRoute,
}) => {
  return await PageDraft.update(
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
        route: originalRoute,
      },
    }
  )
}
