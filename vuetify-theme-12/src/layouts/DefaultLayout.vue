<template>
  <v-app :class="{ 'sidebar-open': sidebarState.isSidebarOpen }">
    <!-- <v-main class="header-outer"> -->
    <HeaderComponent />
    <!-- </v-main> -->
    <v-main class="position-relative main-content">
      <SidebarComponent />
      <div class="page-content">
        <router-view />
      </div>
      <FooterComponent />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import SidebarComponent from "@/components/SidebarComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { useSidebarService } from "@/services/SidebarServices";
const { sidebarState, toggleSidebar } = useSidebarService();
</script>
