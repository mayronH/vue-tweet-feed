<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { User } from '../types/index';
import TweetItem from './TweetItem.vue';

const followers = ref(0);
const user = ref<User>({
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
      content: 'Twitter is amazing',
      created_at: new Date(),
      isHidden: false,
      isFavorite: false,
    },
    {
      id: 3,
      content: 'Kenobi is very good',
      created_at: new Date(),
      isHidden: false,
      isFavorite: false,
    },
    {
      id: 4,
      content: 'Rise of Skywalker is shit',
      created_at: new Date(),
      isHidden: false,
      isFavorite: false,
    },
  ],
});

function followUser() {
  followers.value++;
}

function toggleFavorite(id: number) {
  const favoriteTweet = user.value.tweets.filter((tweet) => tweet.id === id);
  favoriteTweet[0].isFavorite = !favoriteTweet[0].isFavorite
}

watch(followers, (currentFollowers, oldFollowers) => {
  if (oldFollowers < currentFollowers) {
    console.log('wah');
  }
});

const fullName = computed(() => {
  return `${user.value.firstName} ${user.value.lastName}`;
});

onMounted(() => {
  followUser();
});
</script>

<template>
  <div class="user-profile">
    <div class="user-profile-panel">
      <!-- <h3>{{ fullName }}</h3> -->
      <h1 class="user-profile-username">@{{ user.username }}</h1>
      <div v-if="user.isAdmin" class="user-profile-admin-badge">Admin</div>
      <div class="user-profile-followers">
        <strong>Followers: </strong> {{ followers }}
      </div>
    </div>
    <div class="user-profile-tweets-wrapper">
      <TweetItem
        v-for="tweet in user.tweets"
        :key="tweet.id"
        :username="user.username"
        :tweet="tweet"
        @favorite="toggleFavorite"
      />
    </div>
  </div>
</template>

<style>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;

  width: 100%;

  padding: var(--large-size-fluid) var(--medium-size-fluid);
}

.user-profile-panel {
  display: flex;
  flex-direction: column;

  margin-right: var(--large-size-fluid);
  padding: var(--small-size-fluid);

  background-color: var(--bg-lighter);

  border-radius: var(--border-radius);

  box-shadow: var(--box-shadow);
}

.user-profile-admin-badge {
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
}
</style>
