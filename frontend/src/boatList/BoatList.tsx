import { useKeycloak } from '@react-keycloak/web';
import { ReactElement, useEffect } from 'react';
import useBoats from '../useBoats';
import BoatListItem from './BoatListItem';

const BoatList = (): ReactElement => {
  const { boats, deleteBoatById, setBoats } = useBoats();

  const { keycloak } = useKeycloak();

  useEffect(() => {
    fetch('http://localhost:8081/boats', {
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
      },
    })
      .then((response) => response.json())
      .then((boatData) => setBoats(boatData))
      .catch((e) => console.error(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keycloak.token]);

  return (
    <>
      {boats.map((boat) => (
        <BoatListItem key={boat.id} boat={boat} onDelete={deleteBoatById} />
      ))}
    </>
  );
};

export default BoatList;
