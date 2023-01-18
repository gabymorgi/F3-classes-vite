export interface GameI {
  id: string
  name: string
  playedTime: number | null
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

export interface FiltersI {
  name?: string
  tags?: string[]
}

export interface SorterI {
  by: 'name' | 'time' | 'score'
  direction: 'asc' | 'desc'
}

export interface variablesI {
  filters?: FiltersI
  skip?: number
  first?: number
  sorter?: SorterI
}
