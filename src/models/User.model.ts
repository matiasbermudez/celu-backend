import { DataTypes, Model } from "sequelize";
import { sequelizeOn } from "../db/sequelize";
export interface UserAttributes {
    id: number;
    username: string;
    email: string;
    password: string;
    role: 'admin' | 'user';
}

export interface UserCreationAttributes
    extends Omit<UserAttributes, 'id' | 'role'> {
    role?: 'admin' | 'user';
}

export class User
    extends Model<UserAttributes, UserCreationAttributes>
    implements UserAttributes {
    declare id: number;
    declare username: string;
    declare email: string;
    declare password: string;
    declare role: 'admin' | 'user';
}

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
        role: {
            type: DataTypes.ENUM('admin', 'user'),
            defaultValue: 'user',
        },
    },
    {
        sequelize: sequelizeOn,
        modelName: 'User',
        tableName: 'users',
    }
)
