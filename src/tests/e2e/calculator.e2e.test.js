const { test, expect } = require("@playwright/test");

test.describe("Calculator E2E", () => {
  test("should add two numbers and display the result", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await page.fill("#input-a", "2");
    await page.fill("#input-b", "3");
    await page.click("#sum-btn");

    await page.waitForSelector("#result:not(:empty)");

    const result = await page.textContent("#result");
    expect(result).toBe("5");
  });
});
