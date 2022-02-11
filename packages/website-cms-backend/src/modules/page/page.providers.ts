import { Page } from './page.entity'

export const pageProviders = [
  {
    provide: 'PAGE_MODEL',
    useValue: Page,
  },
]
