import { BrowserWindow } from '@cloud-drive/normal-browser'

export function openWindow(...args: Parameters<BrowserWindow['open']>) {
  const browserWindow = new BrowserWindow()

  browserWindow.open(...args)

  return browserWindow
}
