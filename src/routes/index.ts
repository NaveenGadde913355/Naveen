import express from 'express';
import routes from './routes';
const task6Route = express.Router();
 
routes.use('/', task6Route)

export default task6Route;


