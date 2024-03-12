// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "@/assets/scss/_main.scss";

// Vuetify
import { ThemeDefinition, createVuetify } from "vuetify";

const customTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#24B0C3",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#DD4040",
    info: "#038ADA",
    success: "#4DBC4B",
    warning: "#E6AD42",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "customTheme",
    themes: {
      customTheme,
    },
  },
  defaults: {
    VBtn: {
      flat: true,
    },
    VTextField: {
      variant: "outlined",
      color: "primary",
    },
    VCheckbox: {
      color: "primary",
      hideDetails: true,
    },
    VSelect: {
      menuIcon: "mdi-chevron-down",
    },
    VRadioGroup: {
      hideDetails: true,
      color: "primary",
    },
    VSwitch: {
      hideDetails: true,
      color: "primary",
    },
    VAlert: { density: "compact" },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
