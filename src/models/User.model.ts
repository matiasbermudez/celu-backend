import { DataTypes, Model  } from "sequelize";   
import { sequelizeOn } from "../db/sequelize";

export class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role : {
            type: DataTypes.ENUM('admin', 'user'),
            defaultValue: 'user',
        },
    },
    {
        sequelize : sequelizeOn,
          modelName: 'User',
          tableName: 'users',
    }
)
