import { DataTypes, Model } from "sequelize";
import { sequelizeOn } from "../db/sequelize";

export class Wishlist extends Model { }

Wishlist.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        productId: {
            type: DataTypes.UUID,
            allowNull: false
        }
    },
    {
        sequelize: sequelizeOn,
        modelName: 'Wishlist',
        tableName: 'wishlists',
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ['userId', 'productId'],
            },
        ],
    }
)