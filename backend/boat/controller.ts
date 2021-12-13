import { PerformanceObserver, performance } from 'perf_hooks';

import { Request, Response } from 'express';
import Boat from './Boat';
import boatService from './service';

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
  performance.clearMarks();
});
// obs.observe({ type: 'measure' });
let boats: Boat[] = [];

export async function getAllBoats(
  request: Request,
  response: Response,
): Promise<void> {
  performance.mark('A');
  if (boats.length === 0) {
    boats = await boatService.getAllBoats();
  }
  response.json(boats);
  performance.mark('B');
  performance.measure('A to B', 'A', 'B');
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

export async function createBoat(
  request: Request,
  response: Response,
): Promise<void> {
  console.log(request.body);

  const newBoat = await boatService.createBoat(request.body);
  response.status(201).json(newBoat);
}

export async function updateBoat(
  request: Request,
  response: Response,
): Promise<void> {
  const id = parseInt(request.params.id, 10);
  const updatedBoat = await boatService.updateBoat(id, request.body);
  if (updatedBoat) {
    response.json(updatedBoat);
  } else {
    response.status(404).send('NOT FOUND! YOU FOOL!');
  }
}

export async function deleteBoat(
  request: Request,
  response: Response,
): Promise<void> {
  const id = parseInt(request.params.id, 10);
  await boatService.deleteBoat(id);
  response.status(204).send();
}
