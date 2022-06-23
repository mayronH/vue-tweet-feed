<script setup lang="ts">
import { computed, onBeforeUpdate, ref } from 'vue'
import { User } from '../types/index'
import TweetItem from '../components/TweetItem.vue'
import CreateTweet from '../components/CreateTweet.vue'
import { useRoute } from 'vue-router'
import users from '../services/users'
import router from '../router'

const route = useRoute()

const followers = ref(0)
const user = ref<User>({
  id: 0,
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  isAdmin: false,
  tweets: [],
})

// function followUser() {
//   followers.value++
// }

function toggleFavorite(id: number) {
  const favoriteTweet = user.value.tweets.filter((tweet) => tweet.id === id)
  favoriteTweet[0].isFavorite = !favoriteTweet[0].isFavorite
}

function addNewTweet(content: string) {
  user.value.tweets.unshift({
    id: user.value.tweets.length + 1,
    created_at: new Date(),
    isFavorite: false,
    isHidden: false,
    content: content,
  })
}

// watch(followers, (currentFollowers, oldFollowers) => {
//   if (oldFollowers < currentFollowers) {
//     console.log('wah')
//   }
// })

const userId = computed(() => route.params.id)

onBeforeUpdate(() => {
  if (userId.value) {
    const filteredUser = users.filter((user: User) => {
      return user.id == Number(userId.value)
    })

    if(filteredUser.length == 0){
        router.push({name: 'Not Found'})
    } else {
        user.value = filteredUser[0]
    }

  }
})
</script>

<template>
  <div class="user-profile">
    <section class="user-panel">
      <div class="user-profile-panel">
        <h1 class="user-profile-username">@{{ user.username }}</h1>
        <div v-if="user.isAdmin" class="admin-badge">Admin</div>
        <div class="user-profile-followers">
          <strong>Followers: </strong> {{ followers }}
        </div>
      </div>

      <div class="user-create-tweet">
        <CreateTweet @add-tweet="addNewTweet" />
      </div>
    </section>

    <section class="user-profile-tweets-wrapper">
      <TweetItem
        v-for="tweet in user.tweets"
        :key="tweet.id"
        :username="user.username"
        :tweet="tweet"
        @favorite="toggleFavorite"
      />
    </section>
  </div>
</template>

<style>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 2fr;

  width: 100%;

  padding: var(--large-size-fluid) var(--medium-size-fluid);
}

.user-panel {
  margin-right: var(--small-size-fluid);
}

.user-profile-panel {
  display: flex;
  flex-direction: column;

  padding: var(--small-size-fluid);

  background-color: var(--bg-lighter);

  border-radius: var(--border-radius);

  box-shadow: var(--box-shadow);
}

.admin-badge {
  font-weight: 200;

  background-color: var(--accent2);

  padding-inline: var(--extra-small-size-fluid);

  border-radius: 100vw;

  margin-right: auto;
  margin-block: 0.25rem;
}

.user-profile-tweets-wrapper {
  display: grid;
  gap: var(--extra-small-size-fluid);
  grid-auto-rows: min-content;
}
</style>
