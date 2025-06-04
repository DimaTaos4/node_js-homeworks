import express from 'express';
import cors from 'cors'

const app = express();
app.use(cors())
app.use((req, res) => {
    const { authorization } = req.headers;
    res.setHeader('Content-Type', 'text/plain');

    if (authorization) {
        res.status(200).send('Authorization header received');
    } else {
        res.status(401).send('Unauthorized');
    }

});

app.listen(3000, () => {
    console.log('🚀 Server running on port 3000');
});
