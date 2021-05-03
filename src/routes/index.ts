import { Router } from 'express';
import clientesRoutes from './cliente.routes';

const routes = Router();

routes.use('/clientes', clientesRoutes);

export default routes;
