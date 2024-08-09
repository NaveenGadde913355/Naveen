// import { DataTypes, Model, Optional } from 'sequelize';
// import sequelizeconnection from '../config';

// interface EmployeeAttributes {
//     emp_id: number;
//     emp_name: string;
//     emp_salary: number;
//     emp_designation: string;
// }

// export interface EmployeeInput extends Optional<EmployeeAttributes, 'emp_id'> {}
// export interface EmployeeOutput extends Required<EmployeeAttributes> {}

// class Employee extends Model<EmployeeAttributes, EmployeeInput> implements EmployeeAttributes {
//     public emp_id!: number;
//     public emp_name!: string;
//     public emp_salary!: number;
//     public emp_designation!: string;
//     public readonly createdAt?: Date;
//     public readonly updatedAt?: Date;
// }

// Employee.init(
//     {
//         emp_id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//             allowNull: false,
//         },
//         emp_name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         emp_salary: {
//             type: DataTypes.FLOAT,
//             allowNull: false,
//         },
//         emp_designation: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//     },
//     {
//         tableName: 'employees',
//         timestamps: true,
//         sequelize: sequelizeconnection,
//     }
// );

// export default Employee;
