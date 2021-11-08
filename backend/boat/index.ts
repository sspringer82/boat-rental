import { Router } from 'express';
import {
  createBoat,
  deleteBoat,
  getAllBoats,
  getOneBoat,
  updateBoat,
} from './controller';

const boatRouter = Router();

// get all boats
boatRouter.get('/', getAllBoats);
// get one boat
boatRouter.get('/:id', getOneBoat);
// create new boat
boatRouter.post('/', createBoat);
// update boat
boatRouter.put('/:id', updateBoat);
// remove boat
boatRouter.delete('/:id', deleteBoat);

export default boatRouter;
