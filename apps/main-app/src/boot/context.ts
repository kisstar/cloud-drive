import { Context } from '@cloud-drive/browser-system'

/**
 * All definitions related to Context in the application should be obtained from @cloud-drive/system-core,
 * and the instance retrieval of Context should be consolidated here
 */
export function useContext() {
  const ctx = Context.getInstance()

  return ctx
}
