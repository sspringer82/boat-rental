import express from 'express';
import boatRouter from './boat';
import cors from 'cors';
import Keycloak from 'keycloak-connect';
import session from 'express-session';

const memoryStore = new session.MemoryStore();

const port = 8081;
const app = express();

app.use(
  session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
  }),
);

const keycloak = new Keycloak({
  store: memoryStore,
});

app.use(
  keycloak.middleware({
    logout: '/logout',
    admin: '/',
  }),
);

app.use(cors());

app.use(express.json());

app.use('/boats', keycloak.protect(), boatRouter);

app.listen(port, () => console.log(`Listening to http://localhost:${port}`));
