import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";

const Product = sequelize.define('Product', {
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
}, {
    timestamps: true,
})

export default Product