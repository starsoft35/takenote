import { Folder } from '@/utils/enums'

export const folderMap: Record<Folder, string> = {
  [Folder.ALL]: 'All Notes',
  [Folder.FAVORITES]: 'Favorites',
  [Folder.SCRATCHPAD]: 'Scratchpad',
  [Folder.TRASH]: 'Trash',
  [Folder.CATEGORY]: 'Category',
}

export const iconColor = 'rgba(255, 255, 255, 0.25)'

export const shortcutMap = [
  { action: 'New note', key: 'N' },
  { action: 'Delete note', key: 'U' },
  { action: 'Create category', key: 'C' },
  { action: 'Download note', key: 'O' },
  { action: 'Sync notes', key: 'L' },
  { action: 'Markdown preview', key: 'P' },
  { action: 'Toggle theme', key: 'K' },
  { action: 'Search', key: 'F' },
]
