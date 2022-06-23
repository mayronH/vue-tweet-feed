<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import users from './services/users'
</script>

<template>
  <header class="header">
    <router-link to="/" class="logo">
      <h1>Twitter</h1>
    </router-link>
    <nav role="menubar">
      <ul>
        <li v-for="(user, index) in users" :key="index" role="none">
          <router-link
            role="menuitem"
            :to="{ name: 'user', params: { id: user.id } }"
            >{{ user.username }}</router-link
          >
        </li>
      </ul>
    </nav>
    <span class="logged-user">mayronH</span>
  </header>

  <router-view />
</template>

<style>
#app {
  display: grid;
  grid-template-rows: 1fr 6fr;
  grid-auto-rows: min-content;

  min-height: 100vh;
}

.header {
  background-color: var(--bg-lighter);

  padding: var(--extra-small-size-fluid) var(--medium-size-fluid);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
}

.logo {
  text-decoration: none;
  color: inherit;
}

.header nav ul {
  list-style: none;

  display: flex;
  gap: 0.5rem;
}

.header nav a {
  text-decoration: none;

  color: var(--accent);
}

.header nav .router-link-active {
  color: var(--accent2);
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

  background-color: var(--bg-lighter);

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
