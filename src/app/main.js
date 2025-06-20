const express = require("express");
const path = require("path");
const sum = require("./calculator.js").sum;

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/api/sum", (req, res) => {
  const { a, b } = req.body;
  const result = sum(Number(a), Number(b));
  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});