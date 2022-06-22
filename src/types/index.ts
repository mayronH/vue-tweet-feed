export interface User {
  id: number
  username: string
  firstName: string
  lastName: string
  email: string
  isAdmin: boolean
  tweets: Array<Tweet>
}

export interface Tweet {
  id: number
  content: string
  isHidden: boolean
  isFavorite: boolean
  created_at: Date
}

export interface TweetType {
  value: string
  name: string
}
