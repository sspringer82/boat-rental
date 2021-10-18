import { Router } from 'express';
import { getAllBoats, getOneBoat } from './controller';

const boatRouter = Router();

// get all boats
boatRouter.get('/', getAllBoats);
// get one boat
boatRouter.get('/:id', getOneBoat);
// create new boat
// update boat
// remove boat

export default boatRouter;
