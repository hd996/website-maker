import BannerCategory from './Banner'
import Free10000MinutesCategory from './Free10000Minutes'

export interface ComponentSchema {
  key?: string
  enName: string
  zhName: string
  demoImg: string
  data: Record<string, any | Array<any>>
}

export interface ComponentCategory {
  category: string
  zhName: string
  components: ComponentSchema[]
}

export interface Picture {
  Webp: string
  NoWebp: string
}

export const ComponentCategories: ComponentCategory[] = [BannerCategory, Free10000MinutesCategory]
