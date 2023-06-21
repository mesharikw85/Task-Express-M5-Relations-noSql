const Author = require("../../models/Author");
const Post = require("../../models/Post");

exports.postsCreate = async (req, res, next) => {
  try {
    const { authorId } = req.params;
    const newPost = await Post.create({ ...req.body, author: authorId });

    await Author.findByIdAndUpdate(authorId, { $push: { posts: newPost._id } });
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

exports.createAuthor = async (req, res, next) => {
  try {
    const newAuthor = await Author.create(req.body);
    res.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
};

exports.getAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find().populate("posts");
    res.status(200).json(authors);
  } catch (error) {
    next(error);
  }
};
