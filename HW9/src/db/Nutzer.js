import { DataTypes } from "sequelize";

import { emailValidation } from "../constants/nutzer.constants.js";


import sequelize from "./sequelize.js";

const Nutzer = sequelize.define('nutzer', {
    email: {
        type: DataTypes.STRING,
        unique: {
            args: true,
            msg: "nutzer with that email already exists"
        },
        allowNull: false,
        validate: {
            is: {
                args: emailValidation.value,
                msg: emailValidation.message
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

})
export default Nutzer
// Nutzer.sync({ alter: true })