import Boat, { BoatAttributes, BoatCreationAttributes } from './Boat';

class BoatService {
  constructor() {}

  async getAllBoats(): Promise<Boat[]> {
    return Boat.findAll();
  }
  async getOneBoat(id: number): Promise<Boat | null> {
    return Boat.findOne({ where: { id } });
  }

  async createBoat(boat: BoatCreationAttributes): Promise<Boat> {
    return Boat.create(boat);
  }

  async updateBoat(
    id: number,
    boat: BoatAttributes,
  ): Promise<Boat | undefined> {
    const b = await Boat.findOne({ where: { id } });
    return b?.update(boat);
  }

  async deleteBoat(id: number): Promise<void> {
    return Boat.findOne({ where: { id } }).then((boat) => boat?.destroy());
  }
}

export default new BoatService();
