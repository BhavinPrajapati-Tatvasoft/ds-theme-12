<template>
  <h3 class="page-title" data-aos="fade-in">Innerpage</h3>
  <div data-aos="fade-up">
    <DatatableComponent></DatatableComponent>
  </div>
  <v-card class="section-card">
    <h4 class="section-heading" data-aos="fade-up" data-aos-delay="100">
      One Column
    </h4>
    <v-text-field
      label="First Name"
      type="text"
      data-aos="fade-up"
      data-aos-delay="200"
    ></v-text-field>
    <v-text-field
      label="Last Name"
      type="text"
      data-aos="fade-up"
      data-aos-delay="300"
    ></v-text-field>
    <v-textarea
      rows="4"
      variant="outlined"
      label="Comment"
      data-aos="fade-up"
      data-aos-delay="400"
    ></v-textarea>
    <h4 class="section-heading" data-aos="fade-up" data-aos-delay="100">
      Two Column
    </h4>
    <v-row class="my-0">
      <v-col
        cols="12"
        sm="6"
        class="py-0"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <v-text-field label="Email" type="email"></v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="py-0"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <v-text-field label="Account Number" type="text"></v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="py-0"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <v-text-field
          v-model="pswToggle.password"
          class="password-field mb-0"
          :append-inner-icon="
            pswToggle.show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
          "
          :type="pswToggle.show1 ? 'text' : 'password'"
          @click:append-inner="pswToggle.show1 = !pswToggle.show1"
          label="Password"
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="py-0"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <v-text-field
          label="Comapny Name"
          type="text"
          error-messages="Supporting text"
        ></v-text-field>
      </v-col>
    </v-row>
    <h4 class="section-heading" data-aos="fade-up" data-aos-delay="100">
      Three Column
    </h4>
    <v-row class="my-0">
      <v-col
        cols="12"
        sm="6"
        md="4"
        class="py-0"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <v-text-field label="Full Name" type="text"></v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
        class="py-0"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <v-select
          :items="['Mr', 'Mrs', 'Miss']"
          variant="outlined"
          label="Title"
        ></v-select>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
        class="py-0"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <v-text-field label="Occupation" type="text"></v-text-field>
      </v-col>
    </v-row>
    <h4 class="section-heading" data-aos="fade-up" data-aos-delay="100">
      Four Column
    </h4>
    <v-row class="my-0">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="py-0"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <v-text-field label="Nick Name" type="text"></v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="py-0"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <v-text-field label="Locaiton" type="text"></v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="py-0"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <v-text-field label="State" type="text"></v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="py-0"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <v-text-field label="City" type="text"></v-text-field>
      </v-col>
    </v-row>
    <h4 class="section-heading pb-5" data-aos="fade-up" data-aos-delay="100">
      Other Elements
    </h4>
    <h6 class="small-heading pb-3" data-aos="fade-up" data-aos-delay="200">
      File Upload
    </h6>
    <div class="file-upload-outer" data-aos="fade-up" data-aos-delay="300">
      <div class="upload-btn">
        <input type="file" />
        <img
          :src="require('@/assets/images/file-upload-icon.svg')"
          alt="Upload"
        />
        <span>Upload</span>
      </div>
      <p>No Item Selected</p>
    </div>
    <h6 class="small-heading pb-1" data-aos="fade-up" data-aos-delay="100">
      Radio Button
    </h6>
    <v-radio-group
      inline
      v-model="RadioControlModal.radioModal"
      class="mb-4"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <v-radio label="Option 1" value="one"></v-radio>
      <v-radio label="Option 2" value="two"></v-radio>
    </v-radio-group>
    <h6 class="small-heading pb-0" data-aos="fade-up" data-aos-delay="100">
      Checkbox
    </h6>
    <v-row no-gutters class="pb-5" data-aos="fade-up" data-aos-delay="200">
      <v-col cols="auto" class="pe-9">
        <v-checkbox
          label="Option 1"
          v-model="checkboxControlModal.checkBoxModal"
          value="checked"
        ></v-checkbox>
      </v-col>
      <v-col cols="auto">
        <v-checkbox label="Option 2"></v-checkbox>
      </v-col>
    </v-row>
    <h6 class="small-heading pb-4" data-aos="fade-up" data-aos-delay="100">
      Toggle Button
    </h6>
    <v-row class="my-0 mb-6" data-aos="fade-up" data-aos-delay="200">
      <v-col cols="auto" class="py-0">
        <v-switch
          label="On"
          v-model="switchControlModal.switchModal"
          value="on"
          inset
          class="mb-0"
        ></v-switch>
      </v-col>
      <v-col cols="auto" class="py-0">
        <v-switch label="Off" inset class="mb-0"></v-switch>
      </v-col>
    </v-row>
    <h6 class="small-heading pb-3" data-aos="fade-up" data-aos-delay="100">
      Snack Bar
    </h6>
    <v-row class="pb-6">
      <v-col cols="12" md="6" data-aos="fade-up" data-aos-delay="200">
        <v-alert
          closable
          color="success"
          text="This is a success message"
          variant="outlined"
          icon="$success"
        >
          <template v-slot:close>
            <v-btn icon>
              <img
                :src="require('@/assets/images/alert-clear-icon.svg')"
                alt="Close"
              />
            </v-btn>
          </template>
        </v-alert>
      </v-col>
      <v-col cols="12" md="6" data-aos="fade-up" data-aos-delay="300">
        <v-alert
          closable
          color="warning"
          text="This is an alert message"
          variant="outlined"
          icon="$warning"
        >
          <template v-slot:close>
            <v-btn icon>
              <img
                :src="require('@/assets/images/alert-clear-icon.svg')"
                alt="Close"
              />
            </v-btn>
          </template>
        </v-alert>
      </v-col>
      <v-col cols="12" md="6" data-aos="fade-up" data-aos-delay="400">
        <v-alert
          closable
          color="info"
          text="This is a info message"
          variant="outlined"
          icon="$info"
        >
          <template v-slot:close>
            <v-btn icon>
              <img
                :src="require('@/assets/images/alert-clear-icon.svg')"
                alt="Close"
              />
            </v-btn>
          </template>
        </v-alert>
      </v-col>
      <v-col cols="12" md="6" data-aos="fade-up" data-aos-delay="500">
        <v-alert
          closable
          color="error"
          text="This is a error message"
          variant="outlined"
          icon="$error"
        >
          <template v-slot:close>
            <v-btn icon>
              <img
                :src="require('@/assets/images/alert-clear-icon.svg')"
                alt="Close"
              />
            </v-btn>
          </template>
        </v-alert>
      </v-col>
    </v-row>
    <h6 class="small-heading pb-3" data-aos="fade-up" data-aos-delay="100">
      Buttons
    </h6>
    <v-row class="pb-6" data-aos="fade-up" data-aos-delay="200">
      <v-col cols="auto">
        <v-btn color="primary">Primary Button</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" variant="outlined">Secondary Button</v-btn>
      </v-col>
    </v-row>
    <h6 class="small-heading pb-4" data-aos="fade-up" data-aos-delay="100">
      Tabs
    </h6>
    <div data-aos="fade-up" data-aos-delay="200">
      <v-tabs v-model="tabControlModal.tab">
        <v-tab value="one" variant="flat">Tab 1</v-tab>
        <v-tab value="two" variant="flat">Tab 2</v-tab>
      </v-tabs>
      <v-window v-model="tabControlModal.tab" class="tab-content-outer">
        <v-window-item value="one">
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain.
          </p>
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire.
          </p>
        </v-window-item>
        <v-window-item value="two">
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue.
          </p>
        </v-window-item>
      </v-window>
    </div>
  </v-card>
</template>
<script lang="ts" setup>
import DatatableComponent from "@/components/DatatableComponent.vue";
import { ref } from "vue";
const RadioControlModal = ref({
  radioModal: "one",
});
const checkboxControlModal = ref({
  checkBoxModal: ["checked"],
});
const switchControlModal = ref({
  switchModal: ["on", "off"],
});
const tabControlModal = ref({
  tab: null,
});
const pswToggle = ref({
  show1: true,
  password: "Password",
  rules: {
    required: (value: any) => !!value || "Required.",
    min: (v: string | any[]) => v.length >= 8 || "Min 8 characters",
    emailMatch: () => `The email and password you entered don't match`,
  },
});
</script>
