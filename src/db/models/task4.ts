import { DataTypes, Model, Optional } from "sequelize";
import sequelizeconnection from "../config";

interface CustomerAttributes {
    customerId: number;
    Name: string;
    email: string;
    phoneNumber: string;
}

export interface CustomerInput extends Optional<CustomerAttributes, 'customerId'> {}
export interface CustomerOutput extends Required<CustomerAttributes> {}

class Customer extends Model<CustomerAttributes, CustomerInput> implements CustomerAttributes {
    public customerId!: number;
    public Name!: string;
    public email!: string;
    public phoneNumber!: string;
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

Customer.init(
    {
        customerId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
       
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'customers',
        timestamps: true,
        paranoid: true,
        sequelize: sequelizeconnection
    }
);

export default Customer;
