<script setup>
import People from '../components/People.vue';

const { loggedIn, user, session, fetch, clear } = useUserSession()
</script>

<template>
  <div v-if="loggedIn">
    <h1>Welcome {{ user.id }}!</h1>
    <p>Logged in since {{ session.loggedInAt }}</p>
    <button @click="clear">Logout</button>
    <People />
  </div>
  <div v-else>
    <h1>Not logged in</h1>
    <a href="/auth/auth0">Login with Auth0</a>
  </div>
</template>