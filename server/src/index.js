const express = require("express");
const path = require("node:path");
const { profile, projects } = require("../../client/api/data.cjs");

const app = express();
const port = Number(process.env.PORT) || 4000;
const uploadsPath = path.join(__dirname, "..", "..", "client", "uploads");

app.disable("x-powered-by");
app.use(express.json({ limit: "32kb" }));
app.use("/uploads", express.static(uploadsPath, { dotfiles: "deny", index: false, maxAge: "1d" }));

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.get("/api/portfolio", (_request, response) => {
  response.json({ profile, projects });
});

app.use("/api", (_request, response) => {
  response.status(404).json({ error: "API route not found." });
});

app.listen(port, () => {
  console.log(`Portfolio API listening on http://localhost:${port}`);
});
