import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";


const App = sequelize.define(
    'app',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [2],
            }
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    }
)
// App.sync({ alter: true })
export default App