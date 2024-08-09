// import express, { Request, Response } from 'express';
// import Employee from '../db/models/employe';
// const employeeRouter = express.Router();

// employeeRouter.use(express.json());

// // Get all employees
// employeeRouter.get('/employees', async (req: Request, res: Response) => {
//     try {
//         const employees = await Employee.findAll();
//         res.json(employees);
//     } catch (error) {
//         res.status(500).json({ error: (error as Error).message });
//     }
// });

// // Add a new employee
// employeeRouter.post('/employees', async (req: Request, res: Response) => {
//     const { emp_name, emp_salary, emp_designation } = req.body;

//     try {
//         const newEmployee = await Employee.create({ emp_name, emp_salary, emp_designation });
//         res.status(201).json(newEmployee);
//     } catch (error) {
//         res.status(500).json({ error: (error as Error).message });
//     }
// });

// // Update an existing employee
// employeeRouter.put('/employees/:emp_id', async (req: Request, res: Response) => {
//     const { emp_id } = req.params;
//     const { emp_name, emp_salary, emp_designation } = req.body;

//     try {
//         const employeeToUpdate = await Employee.findByPk(emp_id);

//         if (!employeeToUpdate) {
//             return res.status(404).json({ error: 'Employee not found' });
//         }

//         employeeToUpdate.emp_name = emp_name;
//         employeeToUpdate.emp_salary = emp_salary;
//         employeeToUpdate.emp_designation = emp_designation;

//         await employeeToUpdate.save();
//         res.json(employeeToUpdate);
//     } catch (error) {
//         res.status(500).json({ error: (error as Error).message });
//     }
// });

// // Delete an employee
// employeeRouter.delete('/employees/:emp_id', async (req: Request, res: Response) => {              
//     const { emp_id } = req.params;

//     try {
//         const employeeToDelete = await Employee.findByPk(emp_id);

//         if (!employeeToDelete) {
//             return res.status(404).json({ error: 'Employee not found' });
//         }

//         await employeeToDelete.destroy();
//         res.status(204).send();
//     } catch (error) {
//         res.status(500).json({ error: (error as Error).message });
//     }
// });

// export default employeeRouter;
