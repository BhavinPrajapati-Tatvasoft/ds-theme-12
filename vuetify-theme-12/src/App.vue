<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AOS from "aos";
AOS.init({
  easing: "ease-in-out",
  once: true,
});
</script>
