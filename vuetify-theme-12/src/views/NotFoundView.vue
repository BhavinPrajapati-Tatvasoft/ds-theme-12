<template>
  <v-img :src="require('@/assets/images/logo.svg')" width="50"></v-img>
  <h1>404</h1>
  <p>Page not found</p>
  <v-btn @click="$router.back()">Back</v-btn>
</template>

<script lang="ts" setup>
document.title = "404 | Page Not Found";
</script>
