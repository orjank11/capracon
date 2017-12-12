import express from "express";
import path from "path";

const app = express();

app.get("/account.bundle.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/account.bundle.js"));
});

app.get("/app.css", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/app.css"));
});

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
