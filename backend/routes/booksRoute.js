import express from 'express';
import {getBooks} from '../controller/bookController.js';

const booksRoutes= express.Router();
booksRoutes.get("/", getBooks);


export default booksRoutes;