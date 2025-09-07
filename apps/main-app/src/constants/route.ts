export const ROUTER_VIEW = {
  HEADER: 'header',
  ASIDE_NAV: 'asideNav',
  ASIDE_SUN_NAV: 'asideSubNav',
  CONTENT: 'content',
  RIGHT_ASIDE_CONTENT: 'rightAsideContent',
  FOOTER: 'footer',
} as const

export type ROUTER_VIEW_NAME = (typeof ROUTER_VIEW)[keyof typeof ROUTER_VIEW]
