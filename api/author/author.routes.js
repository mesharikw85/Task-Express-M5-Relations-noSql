const express = require("express");
const router = express.Router();
const {
  postsCreate,
  createAuthor,
  getAuthors,
} = require("./author.controllers");

router.post("/:authorId", postsCreate);
router.post("/", createAuthor);
router.get("/", getAuthors);

module.exports = router;
