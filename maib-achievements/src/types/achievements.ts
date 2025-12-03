export type Achievement = {
  id: string
  title: string
  info: string
  progress: number
  gradient: [string, string]
  backgroundColor?: string
  image?: string,
  isWide?: boolean,
  userPercent?: number,
  isFrozen?: boolean,
}
