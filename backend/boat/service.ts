import Boat from './Boat';

class BoatService {
  constructor(private boats: Boat[]) {}

  async getAllBoats(): Promise<Boat[]> {
    return this.boats;
  }
  async getOneBoat(id: number): Promise<Boat | undefined> {
    return this.boats.find((boat) => boat.id === id);
  }
}

const boatService = new BoatService([
  {
    id: 1,
    color: 'hotpink',
    brand: 'Brabus',
    name: 'Die wilde Luzy',
  },
]);
export default boatService;
