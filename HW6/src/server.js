import express from 'express'
import cors from 'cors'
import * as Yup from 'yup'
import Product from './db/Product.js'

const app = express()
app.use(cors())
app.use(express.json())

const productsSchema = Yup.object({
    name: Yup.string().required(),
    price: Yup.number().min(0).required(),
    description: Yup.string().required(),
})


app.get('/api/products', async (req, res) => {
    const products = await Product.findAll()
    res.json(products)
})
app.get('/api/products/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id)
    if (!product) {
        return res.status(404).json({
            message: `Not Found pge with id=${product}`
        })
    }
    res.json(product)
})

app.post('/api/products', async (req, res) => {
    try {
        await productsSchema.validate(req.body);
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.put('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await product.update(req.body);
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.delete('/api/products/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    await product.destroy();
    res.json({ message: 'Product deleted' });
});

const port = process.env.PORT || 3000;
const startServer = () => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
};

export default startServer;