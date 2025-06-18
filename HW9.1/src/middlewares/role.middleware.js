const role = (role) => (req, res, next) => {
    if (req.member.role !== role) return res.status(403).json({ message: 'Нет доступа' });
    next();
};
export default role