const errorHandler = (error, _, res, next) => {
    if (error.code === 11000) {
        console.log(error); // ошибки в mongoDB можно увидеть подробно, например при дублировании error.code = 11000
        return res.status(409).json({
            message: "Такой элемент уже существует (дубликат)",
        });
    }

    // Ошибки Mongoose-валидации (например, required, minlength)
    if (error.name === "ValidationError") {
        console.log(error.errors); // ошибки в mongoDB можно увидеть подробно, например при дублировании error.name =  "ValidationError"
        const messages = Object.values(error.errors).map(err => err.message)
        return res.status(400).json({
            message: messages.join(", ")
        });
    }
    const { status = 500, message = "Server Error" } = error


    res.status(status).json({
        message,
    })
}
export default errorHandler
