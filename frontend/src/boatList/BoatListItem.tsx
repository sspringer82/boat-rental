import DeleteIcon from '@mui/icons-material/Delete';
import { Card, Button } from '@mui/material';
import { ReactElement } from 'react';
import Boat from '../Boat';

type Props = {
  boat: Boat;
  onDelete: (id: number) => void;
};

const BoatListItem = ({ boat, onDelete }: Props): ReactElement => {
  return (
    <Card variant="outlined">
      {boat.brand} - {boat.name} -
      <span
        style={{
          height: 15,
          width: 15,
          backgroundColor: boat.color,
          display: 'inline-block',
        }}
      ></span>
      <Button
        variant="contained"
        startIcon={<DeleteIcon />}
        onClick={() => onDelete(boat.id)}
      >
        Delete
      </Button>
    </Card>
  );
};

export default BoatListItem;
