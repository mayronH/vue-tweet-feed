import { defineStore } from 'pinia'
import { User } from '../types'

export const userStore = defineStore('user', {
  state: () => ({
    user: {} as User,
  }),
  getters: {
    isSetUserAdmin(): boolean {
      if (this.user) return this.user.isAdmin
      return false
    },
  },
  actions: {
    setUser(user: User) {
      this.user = user
    },
  },
})
