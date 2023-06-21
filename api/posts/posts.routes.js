const express = require("express");
const router = express.Router();
const {
  fetchPost,
  postsGet,
  postsUpdate,
  postsDelete,
  tagAdd,
  createTag,
  tagGet,
} = require("./posts.controllers");

router.param("postId", async (req, res, next, postId) => {
  const post = await fetchPost(postId, next);
  if (post) {
    req.post = post;
    next();
  } else {
    const err = new Error("Post Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", postsGet);
router.delete("/:postId", postsDelete);
router.put("/:postId", postsUpdate);
router.put("/:postId/:tagId", tagAdd);
router.put("/add-tag", createTag);
router.put("/tags", tagGet);

module.exports = router;
