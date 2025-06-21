import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";

import { emailValidation } from '../constants/users.constant.js'

const User = sequelize.define("user",
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: {
                args: true,
                msg: "User with this email already exists"
            },
            validate: {
                is: {
                    args: emailValidation.value,
                    msg: emailValidation.message,
                },
            },

        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: "user",
            allowNull: false
        }
    }
)
// User.sync({ alter: true })
export default User