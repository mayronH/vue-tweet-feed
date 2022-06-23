<script setup lang="ts">
import { ref } from 'vue';
import { TweetType } from '../types/index'

const emit = defineEmits(['addTweet'])

const options = ref<TweetType[]>([
  {
    value: 'draft',
    name: 'Draft',
  },
  {
    value: 'instant',
    name: 'Instant Tweet',
  },
])

function createNewTweet() {
  if(newTweetContent.value && newTweetType.value !== 'draft'){
    emit('addTweet', newTweetContent.value)
    newTweetContent.value = ''
  }
}

const newTweetContent = ref('')
const newTweetType = ref('instant')
</script>

<template>
  <form class="user-profile-create-tweet" @submit.prevent="createNewTweet">
        <label for="new_tweet">New Tweet</label>
        <textarea id="new_tweet" v-model="newTweetContent" rows="4"></textarea>

        <div class="type">
          <label for="new_tweet_type">Type</label>
          <div class="select">
            <select id="new_tweet_type" v-model="newTweetType">
              <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
              >
                {{ option.name }}
              </option>
            </select>
          </div>
        </div>

        <button type="submit" class="btn btn-submit">Create Tweet</button>
      </form>
</template>

<style scoped>
.user-profile-create-tweet {
  padding-top: var(--small-size-fluid);
}

.user-profile-create-tweet label {
  font-weight: 700;

  display: block;
  margin-bottom: var(--extra-small-size-fluid);
}

.user-profile-create-tweet textarea {
  color: var(--text);

  width: 100%;

  background-color: var(--bg-lighter);

  box-shadow: var(--box-shadow);

  border: none;
  border-radius: var(--border-radius);
}

.user-profile-create-tweet textarea:focus-visible {
  outline: 1px solid var(--accent2);
}

.user-profile-create-tweet .btn-submit {
  background-color: var(--accent2);

  color: var(--text);

  margin-top: var(--extra-small-size-fluid);
}
</style>
