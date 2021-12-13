type Boat = {
  id: number;
  color: string;
  brand: string;
  name: string;
};

export default Boat;

export type InputBoat = Omit<Boat, 'id'> & { id?: number };
