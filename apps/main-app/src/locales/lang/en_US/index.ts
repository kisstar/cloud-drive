import { merge } from 'es-toolkit'
import componentsLocale from 'tdesign-vue-next/es/locale/en_US'

export default {
  lang: 'English',
  componentsLocale: merge({}, merge(componentsLocale, {
    // More custom configurations can be defined here.
    // For specific configurable content, please refer to the API documentation
    // see: https://tdesign.tencent.com/vue-next/overview-en?tab=api
    // pagination: {
    //   jumpTo: 'xxx'
    // },
  })),
}
