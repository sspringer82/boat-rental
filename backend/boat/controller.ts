import { Request, Response } from 'express';
import boatService from './service';

export async function getAllBoats(
  request: Request,
  response: Response,
): Promise<void> {
  response.json(await boatService.getAllBoats());
}

export async function getOneBoat(
  request: Request,
  response: Response,
): Promise<void> {
  const id = parseInt(request.params.id, 10);
  const boat = await boatService.getOneBoat(id);
  if (boat) {
    response.json(boat);
  } else {
    response.status(404).send('NOT FOUND! YOU FOOL!');
  }
}
