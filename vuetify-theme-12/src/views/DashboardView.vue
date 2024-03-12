<template>
  <h3 class="page-title" data-aos="fade-in">Dashboard</h3>
  <v-row class="pb-lg-2">
    <v-col cols="12" sm="6" lg="3" data-aos="fade-up" data-aos-delay="100">
      <a href="#" title="Technician Hiring" class="statistic-card green">
        <i class="icon-block">
          <img
            :src="require('@/assets/images/technician-hiring-icon.svg')"
            alt="Technician Hiring"
          />
        </i>
        <div class="content-block">
          <h6>Technician Hiring</h6>
          <p>Avg 18 Days to Hire</p>
        </div>
      </a>
    </v-col>
    <v-col cols="12" sm="6" lg="3" data-aos="fade-up" data-aos-delay="200">
      <a href="#" title="HR Hiring" class="statistic-card pink">
        <i class="icon-block">
          <img
            :src="require('@/assets/images/hr-hiring-icon.svg')"
            alt="HR Hiring"
          />
        </i>
        <div class="content-block">
          <h6>HR Hiring</h6>
          <p>Avg 30 Days to Hire</p>
        </div>
      </a>
    </v-col>
    <v-col cols="12" sm="6" lg="3" data-aos="fade-up" data-aos-delay="300">
      <a href="#" title="Developer Hiring" class="statistic-card blue">
        <i class="icon-block">
          <img
            :src="require('@/assets/images/developer-hiring-icon.svg')"
            alt="Developer Hiring"
          />
        </i>
        <div class="content-block">
          <h6>Developer Hiring</h6>
          <p>Avg 18 Days to Hire</p>
        </div>
      </a>
    </v-col>
    <v-col cols="12" sm="6" lg="3" data-aos="fade-up" data-aos-delay="400">
      <a href="#" title="Designer Hiring" class="statistic-card red">
        <i class="icon-block">
          <img
            :src="require('@/assets/images/designer-hiring-icon.svg')"
            alt="Designer Hiring"
          />
        </i>
        <div class="content-block">
          <h6>Designer Hiring</h6>
          <p>Avg 12 Days to Hire</p>
        </div>
      </a>
    </v-col>
  </v-row>
  <v-row class="pb-6 pb-lg-8">
    <v-col cols="12" lg="6" data-aos="fade-up" data-aos-delay="500">
      <v-card class="section-card elidgibility-card">
        <h5>Employment Eligibility</h5>
        <div class="progress-wrapper">
          <v-progress-circular
            color="primary"
            :model-value="progressModal.value"
            :size="106"
            :width="8"
          >
            <p class="progress-text">{{ progressModal.value }}%</p>
          </v-progress-circular>
          <div class="progress-content">
            <h6>High Priority</h6>
            <ul>
              <li>Employess with from 1-9 due date.</li>
              <li>Employment Receipts expiring withing 90 days.</li>
            </ul>
          </div>
        </div>
        <v-row class="eligibility-row pb-3 hr">
          <v-col cols="12" sm="5">
            <div class="first-block">
              <div class="icon-block">
                <img
                  :src="require('@/assets/images/calendar-icon.svg')"
                  alt="Deadline"
                />
              </div>
              <div class="label-value-text">
                <p class="label">Deadline</p>
                <p class="value">5 - days</p>
              </div>
            </div>
          </v-col>
          <v-col>
            <div class="days-block">
              <div class="label-value-text">
                <p class="label">Task Due</p>
                <p class="value">15</p>
              </div>
              <div class="label-value-text">
                <p class="label">Today</p>
                <p class="value">2</p>
              </div>
              <div class="label-value-text">
                <p class="label">1 Days</p>
                <p class="value">4</p>
              </div>
              <div class="label-value-text">
                <p class="label">2 Days</p>
                <p class="value">5</p>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row class="eligibility-row pt-3">
          <v-col cols="12" sm="5">
            <div class="first-block">
              <div class="icon-block">
                <img
                  :src="require('@/assets/images/refresh-icon.svg')"
                  alt="Reverfication"
                />
              </div>
              <div class="label-value-text">
                <p class="label">Reverfication</p>
                <p class="value">1 - 8</p>
              </div>
            </div>
          </v-col>
          <v-col>
            <div class="days-block">
              <div class="label-value-text">
                <p class="label">Task Due</p>
                <p class="value">14</p>
              </div>
              <div class="label-value-text">
                <p class="label">Today</p>
                <p class="value">4</p>
              </div>
              <div class="label-value-text">
                <p class="label">1 Days</p>
                <p class="value">0</p>
              </div>
              <div class="label-value-text">
                <p class="label">2 Days</p>
                <p class="value">4</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" data-aos="fade-up" data-aos-delay="600">
      <v-card class="section-card hiring-chart-card">
        <h5>Top Hiring Sources Q2</h5>
        <HiringSourceChartComponent></HiringSourceChartComponent>
      </v-card>
    </v-col>
  </v-row>
  <div data-aos="fade-up" data-aos-delay="700">
    <DatatableComponent></DatatableComponent>
  </div>
</template>

<script lang="ts" setup>
import HiringSourceChartComponent from "@/components/HiringSourceChartComponent.vue";
import DatatableComponent from "@/components/DatatableComponent.vue";
import { ref } from "vue";
document.title = "Dashboard";
const progressModal = ref({
  interval: {},
  value: 60,
});
</script>
