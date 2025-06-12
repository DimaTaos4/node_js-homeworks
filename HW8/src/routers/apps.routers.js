import { Router } from "express";
import {
    getBooksController,
    getBooksByIdController,
    addBooksController,
    changeBooksController,
    deleteBooksController
} from "../controllers/books.controller.js";

const appsRouter = Router();

appsRouter.get('/', getBooksController);
appsRouter.get('/:id', getBooksByIdController);
appsRouter.post('/', addBooksController);
appsRouter.put('/:id', changeBooksController);
appsRouter.delete('/:id', deleteBooksController); 

export default appsRouter;
