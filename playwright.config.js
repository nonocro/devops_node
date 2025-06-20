const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./src/tests/e2e",
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: "off",
  },
});