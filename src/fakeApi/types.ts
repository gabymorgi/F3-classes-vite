export interface GameI {
  id: string
  name: string
  playedTime: number
  imgUrl: string
  tags: Array<string>
  score: number
  achievements?: Array<{
    id: string
    unlocktime: string | null
    name: string
    description: string | null
  }> | null
}
