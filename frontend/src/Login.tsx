import { useKeycloak } from '@react-keycloak/web';
import { ReactElement, useCallback } from 'react';

const Login = (): ReactElement => {
  const { keycloak } = useKeycloak();
  const login = useCallback(() => {
    keycloak?.login();
  }, [keycloak]);

  return <button onClick={login}>login</button>;
};

export default Login;
