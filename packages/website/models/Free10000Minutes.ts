import DemoFree10000MinutesShallow from '../assets/img/demo-free-10000-minutes__shallow.jpg'
import DemoFree10000MinutesDeep from '../assets/img/demo-free-10000-minutes__deep.jpg'
import { ComponentSchema, ComponentCategory } from './Model'

/**
 * 免费1000分钟 - 浅背景
 */
export interface ShallowBackgroundProps {
  title: string
  btnText: string
  btnLink: string
  btnBlank: boolean
}

export const ShallowBackgroundDefaultProps: ShallowBackgroundProps = {
  title: '免费10000分钟-浅色-标题',
  btnText: '按钮文字',
  btnLink: 'https://github.com/hd996/website-maker',
  btnBlank: true,
}

const ShallowBackgroundComponent: ComponentSchema = {
  zhName: '免费10000分钟-浅色背景',
  enName: 'Free10000MinutesShallowBackground',
  demoImg: DemoFree10000MinutesShallow,
  data: {
    ...ShallowBackgroundDefaultProps,
  },
}

/**
 * 免费1000分钟 - 深背景
 */
export interface DeepBackgroundProps {
  title: string
  btnText: string
  btnLink: string
  btnBlank: boolean
}

export const DeepBackgroundDefaultProps: DeepBackgroundProps = {
  title: '免费10000分钟-深色-标题',
  btnText: '按钮文字',
  btnLink: 'https://github.com/hd996/website-maker',
  btnBlank: true,
}

const DeepBackgroundComponent: ComponentSchema = {
  zhName: '免费10000分钟-深色背景',
  enName: 'Free10000MinutesDeepBackground',
  demoImg: DemoFree10000MinutesDeep,
  data: {
    ...DeepBackgroundDefaultProps,
  },
}

export default {
  zhName: '免费10000分钟',
  category: 'Free 10000 Minutes',
  components: [ShallowBackgroundComponent, DeepBackgroundComponent],
} as ComponentCategory
