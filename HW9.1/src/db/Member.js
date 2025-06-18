import sequelize from "./sequelize.js";
import { DataTypes } from "sequelize";
import { emailValidation } from "../constants/member.constants.js";

const Member = sequelize.define('member', {
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            is: {
                args: emailValidation.value,
                msg: emailValidation.message
            },
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mustChangePassword: {
        type: DataTypes.BOOLEAN, defaultValue: false,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "user",
        allowNull: false,
        validate: {
            isIn: {
                args: [["admin", "user"]],
                msg: "Role can be only admin or user",
            },
        },
    }
})
// Member.sync()
export default Member