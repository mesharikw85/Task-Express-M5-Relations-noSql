const { model, Schema } = require("mongoose");

const AuthorSchema = new Schema({
  name: String,
  post: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

module.exports = model("Author", AuthorSchema);
