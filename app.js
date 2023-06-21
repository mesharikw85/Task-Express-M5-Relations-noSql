const express = require("express");
const dotEnv = require("dotenv");
dotEnv.config();
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const authorsRoutes = require("./api/author/author.routes");

connectDb();
app.use(express.json());
app.use("/posts", postsRoutes);
app.use("/author", authorsRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
