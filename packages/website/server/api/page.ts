import { useQuery } from 'h3'
import { getPageByRoute } from '../module/page'

export default async (req) => {
  const query = useQuery(req)
  return await getPageByRoute(query.route as string)
}
