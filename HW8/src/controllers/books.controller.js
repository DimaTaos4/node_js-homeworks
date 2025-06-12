import * as bookService from '../services/apps.service.js';

export const getBooksController = async (req, res, next) => {
    try {
        const result = await bookService.getBooks();
        res.json(result);
    } catch (error) {
        next(error);
    }
};

export const getBooksByIdController = async (req, res, next) => {
    try {
        const book = await bookService.getBookById(req.params.id);
        if (!book) {
            const error = new Error(`Book with id ${req.params.id} not found`);
            error.status = 404;
            throw error;
        }
        res.json(book);
    } catch (error) {
        next(error);
    }
};

export const addBooksController = async (req, res, next) => {
    try {
        const result = await bookService.addBook(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

export const changeBooksController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const [updated] = await bookService.updateBook(req.body, { where: { id } });
        if (updated) {
            const updatedBook = await bookService.getBookById(id);
            return res.json(updatedBook);
        }
        const error = new Error(`Book with id ${id} not found`);
        error.status = 404;
        throw error;
    } catch (error) {
        next(error);
    }
};

export const deleteBooksController = async (req, res, next) => {
    try {
        const book = await bookService.getBookById(req.params.id);
        if (!book) {
            const error = new Error(`Book with id ${req.params.id} not found`);
            error.status = 404;
            throw error;
        }
        await book.destroy();
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};
