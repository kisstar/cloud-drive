import type { App, Component } from 'vue'

const componentsInfo = import.meta.glob<Record<string, Component>>('./**/index.ts', { eager: true })

/**
 * 注册全局组件
 * 1. 通过 import.meta.glob 自动导入 '.\/**\/index.ts' 下的所有组件
 * 2. 遍历组件信息并注册到 Vue 应用中
 */
export const globalComponents = {
  install(app: App) {
    Object.keys(componentsInfo).forEach((moduleFile) => {
      const components = componentsInfo[moduleFile]

      Object.keys(components).forEach((componentName) => {
        const component = components[componentName]

        app.component(componentName, component)
      })
    })
  },
}
