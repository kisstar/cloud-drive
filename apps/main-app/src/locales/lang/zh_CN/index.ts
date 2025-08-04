import { merge } from 'es-toolkit'
import componentsLocale from 'tdesign-vue-next/es/locale/zh_CN'

export default {
  lang: '简体中文',
  componentsLocale: merge({}, merge(componentsLocale, {
    // More custom configurations can be defined here.
    // For specific configurable content, please refer to the API documentation
    // see: https://tdesign.tencent.com/vue-next/overview-en?tab=api
  })),
}
