import type { Language } from 'element-plus/es/locale'
import type { Lang } from '@/types/setting'
import en from 'element-plus/es/locale/lang/en'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const elLocaleMap: Record<Exclude<Lang, 'system'>, Language> = {
  'zh-CN': zhCn,
  'en-US': en,
}

export { elLocaleMap }
