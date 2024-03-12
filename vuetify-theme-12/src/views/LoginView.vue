<template>
  <div class="login-wrapper">
    <div class="login-banner-outer">
      <div class="login-banner-content">
        <a href="#" title="Wspace" class="login-logo" data-aos="zoom-in">
          <img :src="require('@/assets/images/login-logo.svg')" alt="Wspace" />
        </a>
        <img
          data-aos="zoom-in"
          :src="require('@/assets/images/login-banner-img.svg')"
          alt="Login Banner"
          class="banner-img"
        />
        <h2 data-aos="zoom-in" data-aos-delay="100">
          Work with Your Favorite Apps Using whitepace
        </h2>
        <p data-aos="zoom-in" data-aos-delay="200">
          Whitepace teams up with your favorite software. Integrate with over
          1000+ apps with Zapier to have all the tools you need for your project
          success.
        </p>
      </div>
    </div>
    <div class="login-form-outer">
      <div class="login-form">
        <h2 data-aos="zoom-in">Welcome to Wspace</h2>
        <p class="sub-heading" data-aos="zoom-in" data-aos-delay="100">
          Today is a new day. It's your day. You shape it. Sign in to start
          managing your projects.
        </p>
        <v-text-field
          label="Email"
          type="email"
          data-aos="fade-up"
          data-aos-delay="200"
        ></v-text-field>
        <v-text-field
          data-aos="fade-up"
          data-aos-delay="300"
          v-model="password"
          class="password-field mb-0"
          :append-inner-icon="show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
          :type="show1 ? 'text' : 'password'"
          @click:append-inner="show1 = !show1"
          label="Password"
        ></v-text-field>
        <div
          class="action-wrapper pb-5"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a href="#" title="Forgot Password?" class="primary-link"
            >Forgot Password?</a
          >
        </div>
        <v-btn
          variant="elevated"
          color="primary"
          width="100%"
          to="/dashboard"
          data-aos="fade-up"
          data-aos-delay="500"
          >Sign in</v-btn
        >
        <p class="or-devider" data-aos="fade-up" data-aos-delay="600">
          <span>Or</span>
        </p>
        <v-btn
          variant="tonal"
          width="100%"
          class="mb-5"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <template v-slot:prepend>
            <img
              :src="require('@/assets/images/google-icon.svg')"
              alt="Sign in with Google"
            />
          </template>
          Sign in with Google
        </v-btn>
        <v-btn
          variant="tonal"
          width="100%"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <template v-slot:prepend>
            <img
              :src="require('@/assets/images/facebook-icon.svg')"
              alt="Sign in with Facebook"
            />
          </template>
          Sign in with Facebook
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      show1: false,
      password: "Password",
    };
  },
};
</script>
