// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      githubClientID: process.env.NUXT_GITHUB_CLIENT_ID

    },
    private: {
      githubToken: process.env.NUXT_GITHUB_TOKEN
    }
  }
});