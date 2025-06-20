const { test, expect } = require("@playwright/test");
const express = require("express");
const path = require("path");
const { sum } = require("../../app/calculator.js");

test.describe("Calculator E2E", () => {
  const app = express();
  app.use(express.static(path.join(__dirname, "public")));
  app.use(express.json());

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "app","public", "index.html"));
  });

  app.post("/api/sum", (req, res) => {
    const { a, b } = req.body;
    const result = sum(Number(a), Number(b));
    res.json({ result });
  });

  let server;
  test.beforeAll(async () => {
    server = app.listen(0);
  });

  test.afterAll(async () => {
    await server.close();
  });

  test("should add two numbers and display the result", async ({ page }) => {
    // Get the actual port assigned by the OS
    const port = server.address().port;
    await page.goto(`http://localhost:${port}`);

    await page.fill("#input-a", "2");
    await page.fill("#input-b", "3");
    await page.click("#sum-btn");

    await page.waitForSelector("#result:not(:empty)");

    const result = await page.textContent("#result");
    expect(result).toBe("5");
  });
});
