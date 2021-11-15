import { ReactElement, useEffect, useState } from 'react';
import Boat from '../Boat';
import BoatListItem from './BoatListItem';

const BoatList = (): ReactElement => {
  const [boats, setBoats] = useState<Boat[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/boats')
      .then((response) => response.json())
      .then((boatData) => setBoats(boatData));
  }, []);

  function deleteBoatById(id: number) {
    fetch(`http://localhost:8080/boats/${id}`, { method: 'DELETE' }).then(
      (response) => {
        if (response.ok) {
          setBoats(boats.filter((boat) => boat.id !== id));
        }
      },
    );
  }

  return (
    <>
      {boats.map((boat) => (
        <BoatListItem key={boat.id} boat={boat} onDelete={deleteBoatById} />
      ))}
    </>
  );
};

export default BoatList;
