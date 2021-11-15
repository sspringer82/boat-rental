import { ReactElement } from 'react';
import Boat from '../Boat';

type Props = {
  boat: Boat;
  onDelete: (id: number) => void;
};

const BoatListItem = ({ boat, onDelete }: Props): ReactElement => {
  return (
    <div>
      {boat.brand} - {boat.name} -
      <span
        style={{
          height: 15,
          width: 15,
          backgroundColor: boat.color,
          display: 'inline-block',
        }}
      ></span>
      <button onClick={() => onDelete(boat.id)}>delete</button>
    </div>
  );
};

export default BoatListItem;
