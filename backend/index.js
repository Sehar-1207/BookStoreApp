// const express= require('express');
// const dotenv = require('dotenv'); //when type is commonjs
import dotenv from 'dotenv'; // when type is module in the package.json.
dotenv.config({ path: './config/.env' });
import express from 'express';
import connectDB from "./config/DbConnection.js";
import booksRoutes from './routes/booksRoute.js';
import usersRoutes from './routes/userRoute.js';
import contactRoutes from './routes/contactRoute.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT ||4000;
// connect to mongoDb
connectDB();

// defining routes for books
app.use("/api/books", booksRoutes);

app.use("/api/users",usersRoutes);
app.use('/api', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});