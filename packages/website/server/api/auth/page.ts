import { useBody } from 'h3'
import { createPage, updatePage } from '../../module/page'

export default async (req) => {
  if (req.method.toUpperCase() === 'POST') {
    const body = await useBody(req)

    switch (body.type) {
      case 'CREATE':
        return await createPage(body)

      case 'UPDATE':
        return await updatePage(body)
    }
  }
}
