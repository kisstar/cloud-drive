interface BaseWindow {
  /**
   * Opens a new window with the specified URL.
   */
  open: (url: string, target: '_self' | '_blank' | '_window') => BaseWindow

  /**
   * Closes the window.
   */
  close: () => void
}

export type { BaseWindow }
