import Book from "../db/Books.js";

export const getBooks = () => Book.findAll();
export const getBookById = id => Book.findByPk(id);
export const addBook = payload => Book.create(payload);
export const updateBook = (payload, options) => Book.update(payload, options);
