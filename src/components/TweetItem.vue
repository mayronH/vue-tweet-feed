<script setup lang="ts">
import { PropType } from 'vue'
import { Tweet } from '../types/index'

const emit = defineEmits(['favorite'])

const props = defineProps({
  username: {
    type: String,
    required: true,
  },
  tweet: {
    type: Object as PropType<Tweet>,
    required: true,
  },
})

const favoriteTweet = (id: number) => {
  emit('favorite', id)
}
</script>

<template>
  <div
    class="tweet-item"
    :class="{ favorite: tweet.isFavorite }"
    @click="favoriteTweet(tweet.id)"
  >
    <div class="user-profile-tweet">
      <div class="tweet-item-user">@{{ props.username }}</div>
    </div>
    <div class="tweet-item-content">
      {{ props.tweet.content }}
    </div>
  </div>
</template>

<style scoped>
.tweet-item {
  padding: var(--small-size-fluid);

  background-color: var(--bg-lighter);

  border-radius: var(--border-radius);

  box-shadow: var(--box-shadow);

  cursor: pointer;

  transition: all 0.15s cubic-bezier(0.95, 0.05, 0.795, 0.035);
}

.tweet-item:hover {
  transform: scale(1.1, 1.1);
}

.tweet-item-user {
  font-weight: 700;
}

.favorite {
  border: 1px solid var(--accent);
}
</style>
