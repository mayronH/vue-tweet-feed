import { User } from '../types'

const users = [
  {
    id: 1,
    username: 'mayronH',
    firstName: 'Mayron',
    lastName: 'Carvalho',
    email: 'mayron.hen@gmail.com',
    isAdmin: true,
    tweets: [
      {
        id: 1,
        content: 'My First Tweet',
        created_at: new Date(),
        isHidden: false,
        isFavorite: false,
      },
      {
        id: 2,
        content: 'Kenobi is very good',
        created_at: new Date(),
        isHidden: false,
        isFavorite: false,
      },
      {
        id: 3,
        content: 'Rise of Skywalker is shit',
        created_at: new Date(),
        isHidden: false,
        isFavorite: false,
      },
    ],
  },
  {
    id: 2,
    username: 'master_kenobi',
    firstName: 'Obi-Wan',
    lastName: 'Kenobi',
    email: 'kenobi@mail.com',
    isAdmin: false,
    tweets: [],
  },
  {
    id: 3,
    username: 'palpatine66',
    firstName: 'Darth',
    lastName: 'Sidious',
    email: 'palpatine@mail.com',
    isAdmin: true,
    tweets: [],
  },
  {
    id: 4,
    username: 'aniSkywalker',
    firstName: 'Anakin',
    lastName: 'Skywalker',
    email: 'choosenone@mail.com',
    isAdmin: false,
    tweets: [],
  },
] as Array<User>

export default users
