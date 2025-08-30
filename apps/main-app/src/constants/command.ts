export const COMMAND_NAME = {
  CHANGE_THEME_MODE: 'app:changeThemeMode',
  CHANGE_LANG: 'app:changeLang',
} as const

export type CommandName = (typeof COMMAND_NAME)[keyof typeof COMMAND_NAME]
