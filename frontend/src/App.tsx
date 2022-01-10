import { ReactKeycloakProvider, useKeycloak } from '@react-keycloak/web';
import './App.css';
import BoatProvider from './BoatContext';
import Form from './boatForm/Form';
import BoatList from './boatList/BoatList';

import Keycloak from 'keycloak-js';
import { useCallback } from 'react';
import Login from './Login';

const eventLogger = (event: unknown, error: unknown) => {
  console.log('onKeycloakEvent', event, error);
};

const tokenLogger = (tokens: unknown) => {
  console.log('onKeycloakTokens', tokens);
};

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = Keycloak({
  url: 'http://localhost:8080/auth',
  realm: 'boatrental',
  clientId: 'express',
});

function App() {
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      onEvent={eventLogger}
      onTokens={tokenLogger}
    >
      <BoatProvider>
        <Login />
        <BoatList />
        <Form />
      </BoatProvider>
    </ReactKeycloakProvider>
  );
}

export default App;
