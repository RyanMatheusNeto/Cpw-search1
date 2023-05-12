import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  e2e: {
    baseUrl: 'http://localhost:5173',
  },

  env: {
    API_URL: 'https://api.coingecko.com/api/v3',
  },
})

  