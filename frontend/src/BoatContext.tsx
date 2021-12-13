import React, { Dispatch, SetStateAction } from 'react';
import { ReactElement, useState } from 'react';
import Boat from './Boat';

export const BoatContext = React.createContext<
  [Boat[], Dispatch<SetStateAction<Boat[]>>]
>([[], () => {}]);
type Props = {
  children: ReactElement[];
};

const BoatProvider = ({ children }: Props): ReactElement => {
  const [boats, setBoats] = useState<Boat[]>([]);
  return (
    <BoatContext.Provider value={[boats, setBoats]}>
      {children}
    </BoatContext.Provider>
  );
};

export default BoatProvider;
