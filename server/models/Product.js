const mongoose = require("mongoose");
const movieCommentSchema = require("./MovieComment");

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      min: 0.99,
    },
    quantity: {
      type: Number,
      min: 0,
      default: 0,
    },
    movieComments: [movieCommentSchema],
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

productSchema.virtual("movieCommentCount").get(function () {
  return this.movieComments.length;
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
