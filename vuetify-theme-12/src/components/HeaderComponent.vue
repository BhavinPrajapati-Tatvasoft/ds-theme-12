<template>
  <header class="header">
    <v-btn @click="toggleSidebar" icon class="ms-1">
      <img :src="require('@/assets/images/menu-icon.svg')" alt="Menu" />
    </v-btn>
    <a href="#" title="Wspace" class="logo ms-2 ms-lg-3 mr-3 mr-lg-12">
      <img
        :src="require('@/assets/images/logo.svg')"
        class="d-none d-md-block"
      />
      <img
        :src="require('@/assets/images/mobile-logo.svg')"
        class="d-block d-md-none"
      />
    </a>
    <div
      class="search-overlay d-block d-md-none"
      onclick="document.querySelector('html').classList.remove('open-search');"
    ></div>
    <v-autocomplete
      clearable
      menu-icon=""
      hide-details
      :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]"
      variant="outlined"
      placeholder="Search  here.."
      class="mb-0"
    >
      <template v-slot:prepend-inner>
        <img :src="require('@/assets/images/search-icon.svg')" alt="Search" />
      </template>
    </v-autocomplete>
    <v-btn
      class="search-btn d-md-none"
      icon
      color="primary"
      variant="text"
      onclick="document.querySelector('html').classList.toggle('open-search');"
    >
      <img :src="require('@/assets/images/search-md-icon.svg')" alt="Search" />
    </v-btn>
    <v-menu
      offset="12"
      :close-on-content-click="false"
      location="bottom end"
      class="notification-menu"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="notification-btn"
          icon
          color="primary"
          variant="text"
        >
          <img
            :src="require('@/assets/images/notification-icon.svg')"
            alt="Notification"
          />
          <span class="badge">1</span>
        </v-btn>
      </template>
      <v-list>
        <div class="notification-header">
          <h6 class="pb-0">Notification</h6>
          <v-btn color="primary" variant="plain" density="compact" icon>
            <img
              :src="require(`@/assets/images/menu-refresh-icon.svg`)"
              alt="Refresh"
            />
          </v-btn>
        </div>
        <div class="notification-content">
          <v-list-item link>
            <img
              :src="require('@/assets/images/user-img-1.png')"
              alt="User"
              class="user-img"
            />
            <div class="notification-content">
              <p class="notification-text">Client meeting for hiring</p>
              <p class="time">Oct 3, 2017 9:00 PM</p>
            </div>
          </v-list-item>
          <v-list-item link>
            <img
              :src="require('@/assets/images/user-img-1.png')"
              alt="User"
              class="user-img"
            />
            <div class="notification-content">
              <p class="notification-text">Salary Credited</p>
              <p class="time">Oct 3, 2017 9:00 PM</p>
            </div>
          </v-list-item>
          <v-list-item link>
            <img
              :src="require('@/assets/images/user-img-1.png')"
              alt="User"
              class="user-img"
            />
            <div class="notification-content">
              <p class="notification-text">Applied for leaves</p>
              <p class="time">Oct 3, 2017 9:00 PM</p>
            </div>
          </v-list-item>
          <v-list-item link>
            <img
              :src="require('@/assets/images/user-img-1.png')"
              alt="User"
              class="user-img"
            />
            <div class="notification-content">
              <p class="notification-text">Your workout is complete.</p>
              <p class="time">Oct 3, 2017 9:00 PM</p>
            </div>
          </v-list-item>
          <v-list-item link>
            <img
              :src="require('@/assets/images/user-img-1.png')"
              alt="User"
              class="user-img"
            />
            <div class="notification-content">
              <p class="notification-text">Staff meeting</p>
              <p class="time">Oct 3, 2017 9:00 PM</p>
            </div>
          </v-list-item>
        </div>
        <v-list-item link class="footer-link">
          See all Notification</v-list-item
        >
      </v-list>
    </v-menu>
    <v-btn icon color="primary" variant="text">
      <img :src="require('@/assets/images/message-icon.svg')" alt="Message" />
    </v-btn>
    <v-menu :close-on-content-click="false" class="profile-menu" offset="8">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          variant="text"
          color="primary"
          class="profile-btn"
        >
          <img :src="require(`@/assets/images/user-profile-img.png`)" />
          <p class="name">Hello Rick</p>
          <img
            :src="require(`@/assets/images/user-profile-chevron-down.svg`)"
            class="profile-down-icon"
          />
        </v-btn>
      </template>
      <v-list>
        <v-list-item link>
          <img
            :src="require('@/assets/images/my-profile-icon.svg')"
            alt="My Profile"
          />
          <p>My Profile</p>
        </v-list-item>
        <v-list-item link>
          <img
            :src="require('@/assets/images/setting-icon.svg')"
            alt="Settings"
          />
          <p>Settings</p>
        </v-list-item>
        <v-list-item link to="/">
          <img :src="require('@/assets/images/logout-icon.svg')" alt="Logout" />
          <p>Logout</p>
        </v-list-item>
      </v-list>
    </v-menu>
  </header>
</template>

<script lang="ts" setup>
import { useSidebarService } from "../services/SidebarServices";
const { sidebarState, toggleSidebar } = useSidebarService();
</script>
