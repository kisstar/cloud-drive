export const CATEGORY = {
  DIRECTORY: 'directory',
  AUDIO: 'audio',
  VIDEO: 'video',
  IMAGE: 'image',
  DOCUMENT: 'document',
  OTHER: 'other',
} as const

export interface FileInfo {
  id: string
  category: (typeof CATEGORY)[keyof typeof CATEGORY]
  name: string
  path: string
  size: number
  thumbnail?: string
  created_at: number
  updated_at: number
}
