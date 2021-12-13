import { ReactElement, useEffect } from 'react';
import useBoats from '../useBoats';
import BoatListItem from './BoatListItem';

const BoatList = (): ReactElement => {
  const { boats, deleteBoatById, setBoats } = useBoats();

  useEffect(() => {
    fetch('http://localhost:8080/boats')
      .then((response) => response.json())
      .then((boatData) => setBoats(boatData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {boats.map((boat) => (
        <BoatListItem key={boat.id} boat={boat} onDelete={deleteBoatById} />
      ))}
    </>
  );
};

export default BoatList;
