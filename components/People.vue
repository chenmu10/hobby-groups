<script setup lang="ts">
const { data, status, error, refresh } = await useAsyncData(
  'people',
  () => $fetch('/api/people', {
     credentials: 'include',
     headers: useRequestHeaders(['cookie']),
  })
)
</script>

<template>
  <h1>People. Status = {{ status }}</h1>
  <ul>
    <li v-for="person in data">{{ person.email }}</li>
  </ul>
</template>

<style lang="css" scoped>
</style>