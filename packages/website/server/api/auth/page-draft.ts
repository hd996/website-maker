import { useBody, useQuery } from 'h3'
import {
  getPageDraftByRoute,
  createPageDraft,
  updatePageDraftById,
  updatePageDraftByRoute,
} from '../../module/page-draft'

export default async (req) => {
  if (req.method.toUpperCase() === 'POST') {
    const body = await useBody(req)

    switch (body.type) {
      case 'CREATE':
        return await createPageDraft(body)

      case 'UPDATE':
        return await updatePageDraftById(body)

      case 'UPDATE-BY-ROUTE':
        return await updatePageDraftByRoute(body)
    }
  } else if (req.method.toUpperCase() === 'GET') {
    const query = await useQuery(req)

    return await getPageDraftByRoute(query.route as string)
  }
}
