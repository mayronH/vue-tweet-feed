<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import UserProfile from './components/UserProfile.vue'
</script>

<template>
  <UserProfile />
</template>

<style>
#app {
  display: grid;
  place-items: center;

  min-height: 100vh;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: none;
  outline: none;

  color: var(--text);
  line-height: inherit;

  padding: 0 1rem 0 0;
  margin: 0;

  width: 100%;

  cursor: inherit;
}

select::-ms-expand {
  display: none;
}

.select {
  width: 100%;

  border-radius: var(--border-radius);

  padding: var(--extra-small-size-fluid);

  cursor: pointer;

  background-color: var(--bg-body);

  display: grid;
  grid-template-areas: 'select';
  align-items: center;
}

.select::after {
  content: '';

  width: 0.8rem;
  height: 0.5rem;

  background-color: var(--text);

  clip-path: polygon(100% 0%, 0 0%, 50% 100%);

  justify-self: end;
}

select,
.select::after {
  grid-area: select;
}

select:focus-within {
  outline: 2px solid var(--accent2);
  outline-offset: var(--extra-small-size-fluid);
}

.btn {
  text-transform: lowercase;
  font-weight: 400;
  text-align: center;

  border-radius: var(--border-radius);
  border: none;

  padding: 0.45rem var(--extra-small-size-fluid);

  transition: all 0.15 cubic-bezier(0.95, 0.05, 0.795, 0.035);
}

.btn:hover {
  transform: scale(1.1);
}
</style>
