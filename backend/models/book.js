const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true, // because PDFs are free & downloadable
    },
      
    title: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    pages: {
      type: Number,
      required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    desc: {
      type: String,
      required: true,
    },

    lang: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
