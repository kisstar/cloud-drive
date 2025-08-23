import type { App, Component } from 'vue'

const componentsInfo = import.meta.glob<Record<string, Component>>('./**/index.ts', { eager: true })

/**
 * Register global components
 * 1. Automatically import all components under '.\/**\/index.ts' via import.meta.glob
 * 2. Traverse component info and register them to Vue application
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
