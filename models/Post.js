const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  body: String,
  auther: {
    type: Schema.Types.ObjectId,
    ref: "Auther",
  },
  tag: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
});

module.exports = model("Post", PostSchema);
