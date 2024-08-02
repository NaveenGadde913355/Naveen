import express, { Request, Response } from 'express';
import Customer from '../db/models/task4';

const customerRouter = express.Router();

// Middleware
customerRouter.use(express.json());

// Get all customers
customerRouter.get('/custget', async (req: Request, res: Response) => {
    try {
        const customers = await Customer.findAll();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Add a new customer
customerRouter.post('/custpost', async (req: Request, res: Response) => {
    const { Name, email, phoneNumber } = req.body;

    try {
        const newCustomer = await Customer.create({ Name, email, phoneNumber });
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Update an existing customer
customerRouter.put('/cust/:customerId', async (req: Request, res: Response) => {
    const { customerId } = req.params;
    const { Name, email, phoneNumber } = req.body;

    try {
        const customerToUpdate = await Customer.findByPk(customerId);

        if (!customerToUpdate) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        customerToUpdate.Name = Name;
        customerToUpdate.email = email;
        customerToUpdate.phoneNumber = phoneNumber;

        await customerToUpdate.save();
        res.json(customerToUpdate);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Delete a customer
customerRouter.delete('/cust/:customerId', async (req: Request, res: Response) => {              
    const { customerId } = req.params;

    try {
        const customerToDelete = await Customer.findByPk(customerId);

        if (!customerToDelete) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        await customerToDelete.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

export default customerRouter;
