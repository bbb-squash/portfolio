export type StrengthFinderItem = {
  color: string
  text: string
}

export type SnsItem = {
  link: string
  icon: string
}

export type HistoryItem = {
  year: number
  title: string
  text: string
  remarks?: string
  dotColor: string
}

export type SkillItem = {
  title: string
  icon: string
  text: string
  capabilities: string[]
}

export type ProjectItem = {
  title: string
  text: string
  tools: string[]
  image: string
  date: string
}
