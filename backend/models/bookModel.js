import mongoose from "mongoose";
const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    imageUrl: String,
    title: String,
});

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema); // if schema exits use it if not then create a new one.

export default Book;