import Boat from './Boat';

class BoatService {
  constructor(private boats: Boat[]) {}

  async getAllBoats(): Promise<Boat[]> {
    return this.boats;
  }
  async getOneBoat(id: number): Promise<Boat | undefined> {
    return this.boats.find((boat) => boat.id === id);
  }

  async createBoat(boat: Boat): Promise<Boat> {
    let id = 1;
    if (this.boats.length > 0) {
      const tempId = this.boats
        .map((boat) => boat.id)
        .sort()
        .pop();
      if (tempId) {
        id = tempId + 1;
      }
    }

    this.boats.push(boat);
    return boat;
  }

  async updateBoat(id: number, boat: Boat): Promise<Boat | undefined> {
    const index = this.boats.findIndex((b) => b.id === id);
    if (index === -1) {
      return undefined;
    }
    this.boats[index] = boat;
    return boat;
  }

  async deleteBoat(id: number): Promise<Boat | undefined> {
    const index = this.boats.findIndex((b) => b.id === id);
    if (index === -1) {
      return undefined;
    }

    this.boats = this.boats.filter((b) => b.id !== id);
  }
}

const boatService = new BoatService([
  {
    id: 1,
    color: 'hotpink',
    brand: 'Brabus',
    name: 'Die wilde Luzy',
  },
  {
    id: 2,
    color: 'red',
    brand: 'Yamaha',
    name: 'Boaty McBoatface',
  },
  {
    id: 3,
    color: 'green',
    brand: 'Kawasaki',
    name: 'The Boat',
  },
]);
export default boatService;
