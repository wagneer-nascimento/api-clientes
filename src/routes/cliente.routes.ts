import { Router } from 'express'
import ClienteControl from '../controllers/ClienteControl';

const clienteRouter = Router();

clienteRouter.post('/', ClienteControl.create); 
clienteRouter.put('/:id', ClienteControl.update); 
clienteRouter.get('/', ClienteControl.find); 
clienteRouter.get('/:id', ClienteControl.findOne); 
clienteRouter.delete('/:id', ClienteControl.delete); 

export default clienteRouter;