import DemoBannerShallow from '../assets/img/demo-banner__shallow.jpg'
import DemoBannerDeep from '../assets/img/demo-banner__deep.jpg'
import { Picture, ComponentSchema, ComponentCategory } from './Model'

/**
 * banner - 浅背景
 */
export interface ShallowBackgroundProps {
  title: string
  description: string
  img: Picture
}

export const ShallowBackgroundDefaultProps: ShallowBackgroundProps = {
  title: '横幅-浅色背景-标题',
  description: '横幅-浅色背景-描述',
  img: {
    Webp: 'https://web-cdn.agora.io/website-maker/imgs/demo-banner__shallow.webp',
    NoWebp: 'https://web-cdn.agora.io/website-maker/imgs/demo-banner__shallow.jpg',
  },
}

const ShallowBackgroundComponent: ComponentSchema = {
  zhName: '横幅-浅色背景',
  enName: 'BannerShallowBackground',
  demoImg: DemoBannerShallow,
  data: {
    ...ShallowBackgroundDefaultProps,
  },
}

/**
 * banner - 深背景
 */
export interface DeepBackgroundProps {
  title: string
  description: string
  img: Picture
}

export const DeepBackgroundDefaultProps: DeepBackgroundProps = {
  title: '横幅-深色背景-标题',
  description: '横幅-深色背景-描述',
  img: {
    Webp: 'https://web-cdn.agora.io/website-maker/imgs/demo-banner__deep.webp',
    NoWebp: 'https://web-cdn.agora.io/website-maker/imgs/demo-banner__deep.jpg',
  },
}

const DeepBackgroundComponent: ComponentSchema = {
  zhName: '横幅-深色背景',
  enName: 'BannerDeepBackground',
  demoImg: DemoBannerDeep,
  data: {
    ...DeepBackgroundDefaultProps,
  },
}

export default {
  category: 'Banner',
  zhName: '横幅',
  components: [ShallowBackgroundComponent, DeepBackgroundComponent],
} as ComponentCategory
