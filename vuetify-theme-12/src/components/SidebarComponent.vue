<template>
  <v-navigation-drawer v-model="sidebarState.isSidebarOpen" class="sidebar">
    <v-list density="compact" nav>
      <v-list-item
        title="Dashboard"
        value="Dashboard"
        to="/dashboard"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <template v-slot:prepend>
          <img
            :src="require('@/assets/images/dashboard-default-icon.svg')"
            alt="Dashboard"
            class="default-icon"
          />
          <img
            :src="require('@/assets/images/dashboard-active-icon.svg')"
            alt="Dashboard"
            class="active-icon"
          />
        </template>
      </v-list-item>
      <v-expansion-panels data-aos="fade-right" data-aos-delay="200">
        <v-expansion-panel>
          <v-expansion-panel-title>
            <i class="icon-block">
              <img
                :src="require('@/assets/images/new-hires-default-icon.svg')"
                alt="New Hires"
                class="default-icon"
              />
              <img
                :src="require('@/assets/images/new-hires-active-icon.svg')"
                alt="New Hires"
                class="active-icon"
              />
            </i>
            <span>New Hires</span>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-list nav>
              <v-list-item
                title="Sub Menu"
                value="Sub Menu"
                to="/"
              ></v-list-item>
              <v-list-item
                title="Inner Page"
                value="Inner Page"
                to="/innerpage"
              ></v-list-item>
              <v-list-item
                title="Sub Menu"
                value="Sub Menu"
                to="/"
              ></v-list-item>
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-list-item
        title="Top Perfomances"
        value="Top Perfomances"
        to="/"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <template v-slot:prepend>
          <img
            :src="require('@/assets/images/top-perfomances-default-icon.svg')"
            alt="Top Perfomances"
            class="default-icon"
          />
          <img
            :src="require('@/assets/images/top-perfomances-active-icon.svg')"
            alt="Top Perfomances"
            class="active-icon"
          />
        </template>
      </v-list-item>
      <v-list-item
        title="Settings"
        value="Settings"
        to="/"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <template v-slot:prepend>
          <img
            :src="require('@/assets/images/settings-default-icon.svg')"
            alt="Settings"
            class="default-icon"
          />
          <img
            :src="require('@/assets/images/settings-active-icon.svg')"
            alt="Settings"
            class="active-icon"
          />
        </template>
      </v-list-item>
      <v-list-item
        title="Audit Report"
        value="Audit Report"
        to="/"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <template v-slot:prepend>
          <img
            :src="require('@/assets/images/audit-report-default-icon.svg')"
            alt="Audit Report"
            class="default-icon"
          />
          <img
            :src="require('@/assets/images/audit-report-active-icon.svg')"
            alt="Audit Report"
            class="active-icon"
          />
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useSidebarService } from "../services/SidebarServices";
const { sidebarState } = useSidebarService();
</script>
