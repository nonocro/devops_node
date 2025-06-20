const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./src/tests/e2e",
  timeout: 30000,
  retries: 0,
  webServer: {
    command: "npm run dev",
    port: 3000,
    timeout: 10 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: "off",
  },
});