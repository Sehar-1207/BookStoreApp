import books from '../models/bookModel.js'
export const getBooks=async(req, res)=>{
try {
    const book=await books.find();
    return res.status(200).json(book);
} 
catch (error) {
    console.log("Error",error);
    return res.status(500).json({ error: error.message });
}
};