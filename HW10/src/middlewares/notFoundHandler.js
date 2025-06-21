const notFoundHandler = (req, res) => {
    res.status(404).json({ message: `Can not find the path ${req.url}` })
}
export default notFoundHandler